import React from 'react';
import logo from './logo.png';
import './App.css';

function App() {
  return (
	<div>
		<div className = "app-nav-container-top">
			<nav className="navbar app-nav">
				<a  href="https://bulma.io" className="app-logo">
					<img src={logo}/>
				</a>
				<p className="app-title">
					DandiyStudio
				</p>
				<p className="app-title-sm">
					Dandiy<br/>Studio
				</p>
				<div className="app-nav-top-item-right">
					<a className="button is-light">
						Masuk
					</a>
				</div>
				<div className="app-nav-top-item-right">
					<a className="button is-primary">
						<strong>Daftar</strong>
					</a>
				</div>
				
			</nav>
		</div>
		<div className="app-container">
			<div className="app-hero">
				<section className="hero is-info">
					<div className="hero-body">
						<div className="container">
						<h1 className="title">
							Go Digital with Us!
						</h1>
						<h2 className="subtitle">
							DandiyStudio melakukan 'modernisasi' pada bisnis Anda
						</h2>
						</div>
					</div>
				</section>
			</div>
			<div className="app-content">
				<p>
					Lorem ipsum
				</p>
				<p>
					Lorem ipsum
				</p>
				<p>
					Lorem ipsum
				</p>
				<p>
					Lorem ipsum
				</p>
				<p>
					Lorem ipsum
				</p>
				<p>
					Lorem ipsum
				</p>
				<p>
					Lorem ipsum
				</p>
				<p>
					Lorem ipsum
				</p>
				<p>
					Lorem ipsum
				</p>
				<p>
					Lorem ipsum
				</p>
				<p>
					Lorem ipsum
				</p>
				<p>
					Lorem ipsum
				</p>
				<p>
					Lorem ipsum
				</p>
				<p>
					Lorem ipsum
				</p>
				<p>
					Lorem ipsum
				</p>
				<p>
					Lorem ipsum
				</p>
				<p>
					Lorem ipsum
				</p>
				<p>
					Lorem ipsum
				</p>
				<p>
					Lorem ipsum
				</p>
				<p>
					Lorem ipsum
				</p>
				<p>
					Lorem ipsum
				</p>
				<p>
					Lorem ipsum
				</p>
				<p>
					Lorem ipsum
				</p>
				<p>
					Lorem ipsum
				</p>
				<p>
					Lorem ipsum
				</p>
				<p>
					Lorem ipsum
				</p>
				<p>
					Lorem ipsum
				</p>
				<p>
					Lorem ipsum
				</p>
				<p>
					Lorem ipsum
				</p>
				<p>
					Lorem ipsum
				</p>
				<p>
					Lorem ipsum
				</p>
				<p>
					Lorem ipsum
				</p>
			</div>
		</div>
		
		<div className = "app-nav-container-bottom">
			<nav className="app-nav">
				<div className="app-nav-bottom-item has-text-grey">
					<span className="icon">
						<i className="fas fa-home"></i>
					</span>
					<p>Home</p>
				</div>
				<div className="app-nav-bottom-item has-text-grey">
					<span className="icon">
						<i className="fas fa-shopping-cart"></i>
					</span>
					<p>Pesanan</p>
				</div>
				<div className="app-nav-bottom-item has-text-grey">
					<span className="icon">
						<i className="fas fa-user-circle"></i>
					</span>
					<p>Profil</p>
				</div>
			</nav>
		</div>
	</div>		
	);
}

export default App;
