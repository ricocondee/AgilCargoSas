import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Login from '@pages/Login'
import SignUp from '@pages/SignUp'
import Home from '@pages/Home'
import Track from '@pages/Track'
import Budget from '@pages/Budget'
import Order from '@pages/Order'
import Contact from '@pages/Contact'
import Layout from '@containers/Layout'

const App = () => {
    return (
    <BrowserRouter>
        <Layout>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path="/signup" component={SignUp}/>
                <Route exact path='/login' component={Login} />
                <Route exact path='/track-shipping' component={Track}/>
                <Route exact path='/budget' component={Budget}/>
                <Route exact path='/order' component={Order}/>
                <Route exact path='/contact' component={Contact}/>
            </Switch>
        </Layout>
    </BrowserRouter>            
        
    );
}

export default App;