"use client"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function AboutCard() {
  return (
    <Card style = {{width: "20rem"}}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Name</Card.Title>
        <Card.Text>
          Information about the person with picture
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;