// Home.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import baseUrl from '../../Api';

const Home1 = () => {

  const [petList, setPetList] = useState()
  const [trigger, setTrigger] = useState(false)

  // const featuredPets = [
  //   { id: 1, name: 'Buddy', species: 'Dog', imagePath: puppyImage },
  //   { id: 2, name: 'Whiskers', species: 'Cat', imagePath: kittenImage },
  //   { id: 3, name: 'Feathers', species: 'Parrot', imagePath: otherImage },
  //   { id: 4, name: 'Shelter & Rescue', species: 'Dog', imagePath: shelterImage },  // Example shelter pet
  //   // Add more featured pets as needed
  // ];

  useEffect(() => {
    axios
    .get(baseUrl+'/pet/tfetch')
    .then ((response) => {
      console.log(response.data)
      setPetList(response.data);
    })
   .catch((err) => console.log(err));
  }, [trigger]);

  // const fetchData = async () => {
  //   try {
  //     const response = await axios.get(baseUrl+'/pet/tfetch');
  //     console.log(response.data)
  //     setPetList(response.data);
  //   } catch (error) {
  //     console.error('Error fetching pet data:', error);
  //   }
  // };


  return (
    <div className="home-page">
      <div className="welcome-section">
        <h1>Welcome to Our Pet Store</h1>
        <h1>PET HUB</h1>
        <p>Find your new furry friend with us!</p>
      </div>
  
      <div className="featured-pets-section">
        <h2>Featured Pets</h2>
        <div className="featured-pets">
          {petList ? (
            petList.map((petList) => (
              <div key={petList.id} className="featured-pet-card">
                {console.log(petList.Image)}
                <img src={`data:${petList.Image.contentType};base64,${petList.Image.data}`} alt="petImage" />
                <h3>{petList.PetName}</h3>
                <p>{petList.Breed}</p>
                {/* <Link to={`/pets/${pet.id}`}>View Details</Link> */}
                <button>View Details</button>
              </div>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
  
};

export default Home1;
