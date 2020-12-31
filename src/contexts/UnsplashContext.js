import axios from "axios";
import React, { createContext, useState } from "react";

const UnsplashContext = createContext();

function UnsplashContextProvider(props) {
  const [pictures, setPictures] = useState([]);

  const url = `https://api.unsplash.com/search/photos?page=1&query=${process.env.REACT_APP_UNSPLASH_ID}`;
  /* const fetchPhoto = async (e) => {
    e.preventDefault();
    await axios
      .get(url)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }; */
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
    <UnsplashContext.Provider value={{ pictures, fetchPictures }}>
      {props.children}
    </UnsplashContext.Provider>
  );
}

export default UnsplashContextProvider;
