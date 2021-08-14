import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

// import Component into here to be used
import GalleryList from '../GalleryList/GalleryList';

function App() {

  // start with an empty array
  let [galleryData, setGalleryData] = useState([]);

  // Runs when the component is first put on the DOM
  useEffect(() => {
    getPictures();
  }, []);

  // does a SQL query GET to retrieve pictures from data.js
  const getPictures = () => {
    axios
      .get('/gallery')
      .then((response) => {
        console.log(response);
        // response is the array of pictures
        setGalleryData(response.data);
      }).catch((error) => {
        alert(`Couldn't get pictures. Try again later.`);
        console.log(`Error getting inventory`, error);
      });
  }

  console.log(galleryData);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>
      <GalleryList 
        galleryData={galleryData}
      />
    </div>
  );
}

export default App;
