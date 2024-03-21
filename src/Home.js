import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './styles.css';

function Home() {
  const houses = [
    {
      id: 1,
      imageUrl: 'images/3.jpg', // Replace with actual image URLs
      description: 'Beautiful 3-bedroom house with a spacious backyard.',
    },
    {
      id: 2,
      imageUrl: 'images/2.jpg',
      description: 'Cozy apartment with stunning city views.',
    },
    {
      id: 3,
      imageUrl: 'images/4.jpg',
      description: 'Bright, warm, Home we got you!!.',
    },
    {
      id: 4,
      imageUrl: 'images/5.webp',
      description: 'Elegance, Posh, Simple  you say it!!.',
    },

  ];
  return (
    <div>
      <Header />
      <div className="container">
        <h2>Need a house, we'll get you a HOME</h2>
        <div className="card-container">
          {houses.map((house) => (
            <div key={house.id} className="card">
              <img src={house.imageUrl} alt="House" />
              <div className="card-description">
                <p>{house.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
