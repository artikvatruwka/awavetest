import { hot } from 'react-hot-loader/root';
import React from 'react';
import { BrowserRouter, Link} from 'react-router-dom';
import Routes, { paths } from './routes';
import {  Provider } from "react-redux";
import store from './redux/store';
import Layout from './components/Layout';
import './styles.scss';

const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter >
                <Layout>
                    <Routes/>
                </Layout>
            </BrowserRouter >
        </Provider>
    );
}

export default App;