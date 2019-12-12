import React from 'react';
import logo from './logo.png';
import './App.css';

const data = [
				{
					row : 0,
					col: [{title: 'Desain Logo', price: 25, discount: 0},
							{title: 'Desain Spanduk/ Banner', price: 30, discount: 0}]
				},
				{
					row : 1,
					col: [{title: 'Desain Email Marketing', price: 50, discount: 0},
							{title: 'Website Company Profile', price: 200, discount: 0}]
				},
				{
					row: 2,
					col: [{title: 'Toko Online Pribadi', price: 500, discount: 0}]
				}
			];

const Card = ({rowData}) => (
	<div className = "row columns">
		{
			rowData.col.map((colData) => (
				<div className = "column is-half">
					<div className="card">
						<div className="card-image">
							<figure className="image is-4by3">
							<img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"/>
							</figure>
						</div>
						<div className="content">
							<table>
								<tr>
									<td  className = "service-title">
										<h5>
										{
											colData.title
										}
										</h5>
									</td >
									<td className = "service-from">
										<p>Start from</p>
									</td>
									<td className = "service-price">
										<h4>
											Rp&nbsp;
											{
												colData.price - colData.discount
											}k
										</h4>
									</td>
								</tr>
							</table>
						</div>
					</div>
				</div>
			))
		}
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
							Bikin bisnis Anda menjadi lebih modern dengan DandiyStudio
						</h2>
						</div>
					</div>
				</section>
			</div>
			<div className="app-content">
				{
					data.map((item) =>(
						<Card key={item.row} rowData={item}/>
					))
				}
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
