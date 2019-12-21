import React from 'react';
import Card from '../components/Card';

const data = [
    {
        row : 0,
        col: [{	id: 0,
                title: 'Desain Logo', 
                price: 25,
                discount: 0,
                img: require('../assets/images/logo-1.png'),
                paylater: true
                },
              {	id: 1,
                title: 'Desain Spanduk/ Banner',
                price: 30,
                discount: 0,
                img: require('../assets/images/banner-1.png'),
                paylater: true
            }]
    },
    {
        row : 1,
        col: [{	id: 2,
                title: 'Desain Email Marketing',
                price: 50,
                discount: 0,
                img: require('../assets/images/email-1.png'),
                paylater: false
                },
              {	id: 3,
                title: 'Website Company Profile',
                price: 200,
                discount: 0,
                img: require('../assets/images/company-1.png'),
                paylater: false
            }]
    },
    {
        row: 2,
        col: [{	id: 4,
                title: 'Toko Online Pribadi',
                price: 500,
                discount: 0,
                img: require('../assets/images/shop-1.png'),
                paylater: false
            }]
    }
];

const Home = () => (
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
)

export default Home;