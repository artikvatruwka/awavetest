import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import LoginPage from '../pages/login';
import HomePage from '../pages/home';
import SignUpPage from '../pages/signUp';
import ProfilePage from '../pages/profile';
import UsersPage from '../pages/users';
import LogoutPage from '../pages/logout';
import store from '../redux/store';

const paths = {
    home: '/', 
    users: '/users',
    profile: '/profile',
    signUp: '/sign-up',
    login: '/login',
    logout: '/logout'
}

const PrivateRoute = ({ children, ...rest }) => (
        <Route {...rest} render={() => {
        const { auth } = store.getState();
        return auth.isAuthenticated === true
            ? children
            : <Redirect to={paths.login} />
        }} />
    )

const GuestRoute = ({ children, ...rest }) => (
        <Route {...rest} render={() => {
        const { auth } = store.getState();
        return auth.isAuthenticated === false
            ? children
            : <Redirect to={paths.home} />
        }} />
    )

const Routes = () => (
    <Switch>
        <GuestRoute path={paths.login}><LoginPage /></GuestRoute>
        <GuestRoute path={paths.signUp}><SignUpPage /></GuestRoute>
        <PrivateRoute path={paths.profile} ><ProfilePage /></PrivateRoute>
        <PrivateRoute path={paths.logout} ><LogoutPage /></PrivateRoute>
        <Route path={paths.users}><UsersPage /></Route>
        <Route path={paths.home}><HomePage /></Route>
    </Switch>
);

export { paths };
export default Routes;