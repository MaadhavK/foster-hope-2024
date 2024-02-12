
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const id = "54579149x"
const token = "glpat-UCq8eByXaqn8Jzxw96g1"
const headers = {
  'Authorization': `BEARER ${token}`
};

async function getMemberCommit({username}) {
  const res = await fetch(`https://gitlab.com/projects/${id}/repository/commits?author_username=${username}`,{headers} )
  if (!res.ok) {
    throw new Error("No data")
  }
  return await res.json()
}

async function getMemberIssue({username}) {
  const res = await fetch(`https://gitlab.com/projects/${id}/issue_statistics?assignee_id=${username}`, {headers})
  if (!res.ok) {
    throw new Error("No data")
  }
  return await res.json()
}

export default async function AboutCard({member}) {
  const commit = await getMemberCommit(member.username)
  const issue = await getMemberIssue(member.username)
  console.log(commit)
  console.log(issue)
  return (
    <Card style = {{width: "20rem"}}>
       <Card.Img variant="top" src={"http://localhost:3001" + member.img}/>
      <Card.Body>
        <Card.Title>{member.name}</Card.Title>
        <Card.Text>
          {member.id}
          Commit: {commit}
          Issue: {issue}
          Role: {member.role}
          Bio: {member.bio}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
