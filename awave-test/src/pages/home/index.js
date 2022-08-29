import React from 'react';
import UsersList from '../../components/UserList';
import { useSelector } from 'react-redux';
import UserCard from '../../components/UserCard';
import { useHistory } from 'react-router';
import { paths } from '../../routes';
import { Button } from 'react-bootstrap';
const HomePage = () => {
   const history = useHistory();
   const {isAuthenticated} = useSelector(state=>state.auth)
   const {users} = useSelector(state=>state.users)

   const MyProfileButton = () => <Button onClick={()=>{history.push(paths.profile)}}>Go to my profile</Button>
   
   return  (
      <>
         {isAuthenticated ? <UserCard user={users[0]} button={<MyProfileButton/>} /> : <></>}
         <UsersList />
      </>
   )
}

export default HomePage; 