import React from 'react';
import { Card } from 'react-bootstrap';


const UserCard = ({ user, button }) => (
    <Card style={{ width: '18rem' }}    >
        <Card.Img variant="top" src={user.avatar}/>
        <Card.Body>
            <Card.Title>{user.first_name} {user.last_name}</Card.Title>
            <Card.Text>{user.email}</Card.Text>
            {button}
        </Card.Body>
    </Card>);

export default UserCard;