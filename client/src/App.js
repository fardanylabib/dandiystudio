import React from 'react';
import logo from './logo.png';
import './App.css';

const data = ['a','b','c','d','e','f','g']

const Card = () => (
	<div className = "column is-half">
	<div className="card">
		<div className="card-image">
			<figure className="image is-4by3">
			<img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"/>
			</figure>
		</div>
		<div className="card-content">
			<div className="media">
				<div className="media-left">
					<figure className="image is-48x48">
						<img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image"/>
					</figure>
				</div>
				<div className="media-content">
					<p className="title is-4">John Smith</p>
					<p className="subtitle is-6">@johnsmith</p>
				</div>
			</div>

			<div className="content">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit.
			Phasellus nec iaculis mauris. <a>@bulmaio</a>.
			<a href="#">#css</a> <a href="#">#responsive</a>
			<br/>
			<time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
			</div>
		</div>
	</div>
	</div>
);

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
							Buat bisnis Anda menjadi lebih modern dengan DandiyStudio
						</h2>
						</div>
					</div>
				</section>
			</div>
			<div className="app-content">
				<div className = "row columns">
				{
					data.map((item) =>(
						<Card key={item}/>
					))
				}
				</div>

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
