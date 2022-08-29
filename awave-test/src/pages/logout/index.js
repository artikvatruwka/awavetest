import React from 'react';
import {Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/slices/auth';
import { paths } from '../../routes';

const LogoutPage = () => {
    const dispatch = useDispatch();
    dispatch(logout());
    return <Redirect to={paths.home} />
}

export default LogoutPage; 