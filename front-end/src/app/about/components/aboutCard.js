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
    username = "gracep"
  } else if (username == "Alea Nablan") {
    username = "aleanadhiraa"
  } else if (username == "Nathan Cheng") {
    username = "nathanchengus"
  }
  const res = await fetch(`https://gitlab.com/api/v4/projects/${id}/repository/commits?author=${username}`,{ method: 'GET', headers} )
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

export default async function AboutCard({member}) {
  const commit = await getMemberCommit(member.name)
  const issue = await getMemberIssue(member.username)
  // console.log(issue)
  // console.log("Current Member: ", member.name)
  // console.log(commit.length)
  // console.log(issue.length)
  return (
    <Card style = {{width: "20rem"}}>
       <Card.Img variant="top" src={member.img}/>
      <Card.Body>
        <Card.Title>{member.name}</Card.Title>
        <Card.Text>
          Commit: {commit.length} <br />
          Issue: {issue.length} <br />
          Role: {member.role} <br />
          Bio: {member.bio}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
