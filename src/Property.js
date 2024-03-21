import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';

const Property = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/Property/')
      .then(response => {
        setProperties(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleImageChange = (propertyId, imageUrl) => {
    // Update the property with the new image URL
    setProperties(prevProperties => {
      return prevProperties.map(property => {
        if (property.Property_ID === propertyId) {
          return { ...property, imageUrl: imageUrl };
        }
        return property;
      });
    });
  };

  return (
    <div>
      <Header />
      <div style={propertyContainerStyle}>
        <h2 style={headingStyle}>Property</h2>
        <div className="property-container">
          {properties.map(property => (
            <div className="property-card" key={property.Property_ID} style={propertyCardStyle}>
              <img className="property-image" src={property.imageUrl} alt="Property" style={propertyImageStyle} />
              <div className="property-details" style={propertyDetailsStyle}>
                <h3>{property.House_No}</h3>
                <p>Occupied: {property.Occupied ? 'Yes' : 'No'}</p>
                <p>Tenant ID: {property.Tenant_ID}</p>
                <input
                  type="text"
                  placeholder="images/4.jpg"
                  value={property.imageUrl || ''}
                  onChange={e => handleImageChange(property.Property_ID, e.target.value)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

const propertyContainerStyle = {
  padding: '20px',
};

const headingStyle = {
  textAlign: 'center',
};

const propertyCardStyle = {
  width: '300px',
  padding: '20px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  transition: 'transform 0.3s ease',
  marginBottom: '20px',
};

const propertyImageStyle = {
  width: '100%',
  height: '200px',
  objectFit: 'cover',
  borderRadius: '5px',
};

const propertyDetailsStyle = {
  marginTop: '10px',
};

export default Property;
