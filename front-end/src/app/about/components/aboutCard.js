"use client"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const AboutCard = ({ imageUrl, name, about }) => {
  return (
    <Card style = {{width: "20rem"}}>
      <Card.Img variant="top" src={imageUrl}/>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{about}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default AboutCard;