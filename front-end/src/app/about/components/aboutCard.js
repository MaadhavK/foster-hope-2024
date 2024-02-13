
"use client"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const id = "54579149"
const token = "glpat-UCq8eByXaqn8Jzxw96g1"
const headers = {
  'Authorization': `BEARER ${token}`
};

async function getMemberCommit(username) {
  if (username == "Raymond Wang") {
    username = "raymww"
  } else if (username == "Grace Pan") {
    username = "pan-grace"
  }
  console.log(`https://gitlab.com/api/v4/projects/${id}/repository/commits?author=${username}`)
  const res = await fetch(`https://gitlab.com/api/v4/projects/${id}/repository/commits?author=${username}`,{ method: 'GET', headers} )
  if (!res.ok) {
    console.log("No data")
  }

  return await res.json()
}

// async function getMemberIssue({username}) {
//   const res = await fetch(`https://gitlab.com/projects/${id}/issue_statistics?assignee_id=${username}`, {headers})
//   if (!res.ok) {
//     // throw new Error("No data")
//     console.log("No Data")
//   }
//   return await res.json()
// }

export default async function AboutCard({member}) {
  const commit = await getMemberCommit(member.name)
  // const issue = await getMemberIssue(member.username)
  // console.log(issue)
  console.log("Current Member: ", member.name)
  return (
    <Card style = {{width: "20rem"}}>
       <Card.Img variant="top" src={"http://localhost:3001" + member.img}/>
      <Card.Body>
        <Card.Title>{member.name}</Card.Title>
        <Card.Text>
          {member.id}
          Commit: {commit.length}
          {/* Issue: {issue} */}
          Role: {member.role}
          Bio: {member.bio}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
