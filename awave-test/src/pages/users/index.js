import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers } from '../../redux/slices/users';
import { Container, Card } from 'react-bootstrap';
import UserList from '../../components/UserList';

const UsersPage = () => {
    return <UserList />
}

export default UsersPage ; 