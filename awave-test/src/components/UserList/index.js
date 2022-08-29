import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers } from '../../redux/slices/users';
import { Row, Col, Pagination } from 'react-bootstrap';
import UserCard from '../UserCard';

const UsersList = () => {
    const dispatch = useDispatch();
    const { users, totalItems, totalPages } = useSelector(state => state.users);
    const [itemsPerPage, setItemPerPage] = useState(6);
    const [selectedPage, setSelectedPage] = useState(1);

    useEffect(()=>{
        dispatch(getUsers(selectedPage, itemsPerPage))
    }, [selectedPage])
    
    const PaginationTab = () => (
        <Pagination>
            {[...Array(totalPages)].map((_,number) => 
                <Pagination.Item 
                    key={'pagination-'+number}
                    onClick={()=>{ setSelectedPage(number+1)}}
                >
                    {number+1}
                </Pagination.Item>
            )}
        </Pagination>
    )

    return (
        <>
            <Row>
                {users.map((user) => (
                    <Col xs={4} key={user.id}>
                        <UserCard user={user} />
                    </Col>)
                )}
            </Row>
            <PaginationTab />
        </>
    );
}

export default UsersList; 