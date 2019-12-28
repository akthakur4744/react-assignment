import React from 'react';
import { connect } from 'react-redux';

import { Route, Switch, Redirect } from 'react-router-dom';

import Login from '../login/login';
import Dashboard from '../dashboard/dashboard';


const Router = (props) => {
    return (
        props.user ?
            <Switch>
                <Route path='/dashboard' exact component={Dashboard} />
                <Redirect to='/dashboard' />
            </Switch>
            :
            <Switch>
                <Route path='/' exact component={Login} />
                <Redirect to='/' />
            </Switch>
    )
}

const mapStateToProps = state => {
    return {
        user: state.user
    };
};

export default connect(mapStateToProps, null)(Router);
