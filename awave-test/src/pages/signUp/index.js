import React, {useState, useEffect} from 'react';
import { Form, Button, Alert } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { register } from '../../redux/slices/auth';
import {paths} from '../../routes'; 

const SignUpPage = () => {
    const history = useHistory()
    const dispatch = useDispatch();
    const { errorMessage , isError, isAuthenticated } = useSelector(state=>state.auth);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(()=>{
        if(isAuthenticated) { 
            history.push(paths.home);
        }
    }, [isAuthenticated])

    const handleSignUp = () => {
        dispatch(register(email, password));
    }


    const handleEmailChange = (e) => {
        const value = e.currentTarget.value;
        setEmail(value);
    }

    const handlePasswordChange = (e) => {
        const value = e.currentTarget.value;
        setPassword(value);
    }

    return (
        <Form>
            <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control 
                type="email" 
                placeholder="Enter email" 
                onChange={handleEmailChange}
                value={email}
            />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control 
                type="password" 
                placeholder="Password" 
                onChange={handlePasswordChange}
                value={password}
            />
            </Form.Group>
            {isError ? 
                <Alert variant="danger">
                    {errorMessage}
                </Alert>
            :   <></>}
            <Button variant="primary" onClick={handleSignUp} >
                Sign Up
            </Button>
        </Form>
    )
}

export default SignUpPage; 