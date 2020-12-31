import React, { useReducer, useEffect } from "react";
import axios from "axios";


function UnsplashContextProvider(props) {
  const [pictures, setPictures] = useState([]);

  const url = `https://api.unsplash.com/search/photos?page=1&query=${process.env.REACT_APP_UNSPLASH_ID}`;

  const fetchPictures = async (e, pictures) => {
    e.preventDefault();
    try {
      const api_call = await fetch(url);
      const data = await api_call.json();
      console.log(data);
      /* setPictures(""); */
    } catch (err) {
      console.log(err);
      setPictures("");
    }
  };

  return (
   
  );
}

export default UnsplashContextProvider;
