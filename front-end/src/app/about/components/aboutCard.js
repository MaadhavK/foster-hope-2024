"use client"
import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { Lora, Cabin } from 'next/font/google';



const id = "54579149"
const token = "glpat-UCq8eByXaqn8Jzxw96g1"
const headers = {
  'Authorization': `BEARER ${token}`
};

const lora = Lora({weight: '400', subsets: ['latin']})
const cabin = Cabin({weight: '400', subsets: ['latin']})

// Define the AboutCard component as a const
const AboutCard = ({ member }) => {
  const [commit, setCommit] = useState([]);
  const [issue, setIssue] = useState([]);

  // Getting data from gitlab
  useEffect(() => {
    async function fetchData() {
      const commitData = await getMemberCommit(member.name);
      const issueData = await getMemberIssue(member.username);
      setCommit(commitData);
      setIssue(issueData);
    }
    fetchData();
  }, [member.name, member.username]);

  // Getting commits
  async function getMemberCommit(username) {
    if (username == "Raymond Wang") {
      username = "raymww"
    } else if (username == "Grace Pan") {
      username = "gracep"
    } else if (username == "Alea Nablan") {
      username = "aleanadhiraa"
    } else if (username == "Nathan Cheng") {
      username = "nathanchengus"
    } else if (username=="Maadhav Kothuri") {
      username = "maadhavskothuri"
    }
    // Get info from gitlab api
    const res = await fetch(`https://gitlab.com/api/v4/projects/${id}/repository/commits?author=${username}&all=true&per_page=100`,{ method: 'GET', headers} )
    
    // const res = await fetch(`https://gitlab.com/api/v4/projects/${id}/repository/contributors?author=${username}`,{ method: 'GET', headers} )
    if (!res.ok) {
      console.log("No data for commits")
    }
  
    return await res.json()
  }

  async function getMemberIssue(username) {
    const res = await fetch(`https://gitlab.com/api/v4/projects/${id}/issues?author_username=${username}`, {method: 'GET', headers})
    if (!res.ok) {
      // throw new Error("No data")
      console.log("No Data for issues")
    }
    return await res.json()
  }

  return (
    <Card style={{ width: "20rem", margin:"0 auto"}}>
      <Card.Img variant="top" style={{width:"20rem", height:"20rem", objectFit:"cover"}} src={member.img} />
      <Card.Body style={{ padding: "1rem", background: "lightblue" , maxWidth:"20rem"}}>
        <Card.Title className={cabin.className} style={{fontWeight:"bold"}}>{member.name}</Card.Title>
        <Card.Text className={cabin.className}>
          Commit: {commit.length} <br />
          Issue: {issue.length} <br />
          Role: {member.role} <br />
          Bio: {member.bio}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default AboutCard;
