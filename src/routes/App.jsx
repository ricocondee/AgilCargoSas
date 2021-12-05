import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import SignUp from '../pages/SignUp';
import Login from '@pages/Login';
import Home from '@pages/Home';
import Layout from '../containers/Layout';

const App = () => {
    return (
    <BrowserRouter>
        <Layout>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path="/signup" component={SignUp}/>
                <Route exact path='/login' component={Login} />
            </Switch>
        </Layout>
    </BrowserRouter>            
        
    );
}

export default App;