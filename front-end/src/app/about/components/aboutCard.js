"use client"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function AboutCard({member}) {
  return (
    <Card style = {{width: "20rem"}}>
       <Card.Img variant="top"/>
      <Card.Body>
        <Card.Title>{member.name}</Card.Title>
        <Card.Text>
          {member.id}
          Role: {member.role}
          Bio: {member.bio}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default AboutCard;