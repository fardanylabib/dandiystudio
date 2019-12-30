import React from 'react';
import logo from './logo.png';
import TopNavigation from './components/TopNavigation';
import BottomNavigation from './components/BottomNavigation';
import Home from './pages/Home';
import Orders from './pages/Orders';
import Profile from './pages/Profile';
import ServiceItem from './pages/ServiceItem';
import Background from './Background';
import ScrollButton from './components/ScrollButton';
import Authentication from './pages/Authentication';
import { connect } from 'react-redux';

import {
	BrowserRouter as Router,
	Switch,
	Route
  } from "react-router-dom";
import './App.css';


class App extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			navState: 0
		}
	}

	setNavigation = (newState) =>{
		console.log('set navigation '+ newState);
		this.setState({navState : newState});
	}

	render() {
		console.log('current state = '+this.state.navState);
		return (
			<Router>
				<div>
					<Background/>
					{
						this.props.isAuthenticating ? <Authentication/>:
						<div>
							<TopNavigation logo={logo} user={this.props.user}/>
							<Switch>
								<Route exact path='/'>
									<Home setNavigation={this.setNavigation}/>
								</Route>
								<Route path='/orders'>
									<Orders />
								</Route>
								<Route path='/profile'>
									<Profile />
								</Route>
								<Route path = '/service/:id/:title' component={ServiceItem}>
								</Route>
							</Switch>
							<BottomNavigation
								state={this.state.navState}
								setNavigation={this.setNavigation}
							/>
						</div>
					}
					<ScrollButton scrollStepInPx="50" delayInMs="16.66"/>	
				</div>
			</Router>	
		);
	}
}

const mapStateToProps = (state) => {
    return {
		isAuthenticating: state.isAuthenticating,
		user: state.user
    }
}

export default connect(mapStateToProps)(App);
