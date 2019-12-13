import React from 'react';
import logo from './logo.png';
import TopNavigation from './components/TopNavigation';
import BottomNavigation from './components/BottomNavigation';
import Home from './pages/Home';
import Orders from './pages/Orders';
import Profile from './pages/Profile';
import Background from './Background';
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
					<TopNavigation logo={logo}/>
					<Switch>
						<Route exact path='/'>
							<Home />
						</Route>
						<Route path='/orders'>
							<Orders />
						</Route>
						<Route path='/profile'>
							<Profile />
						</Route>
					</Switch>
					<BottomNavigation
						state={this.state.navState}
						setNavigation={this.setNavigation}
					/>
				</div>	
			</Router>	
		);
	}
}

export default App;
