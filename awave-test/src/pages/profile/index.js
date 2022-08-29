import React from 'react';
import { useSelector } from 'react-redux';
import UserCard from '../../components/UserCard';
const ProfilePage = () => {
    const { users } = useSelector(state=>state.users);
    // login does not provide data to get users,
    //  it just return token so here is just first user 
    return <UserCard user={users[0]} />
}

export default ProfilePage; 