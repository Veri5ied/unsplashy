import axios from "axios";
import React, { createContext, useState } from "react";

const UnsplashContext = createContext();

function UnsplashContextProvider(props) {
  const [searchString, setSearchString] = useState([]);

  const url = `https://api.unsplash.com/search/photos?page=1&query=${process.env.REACT_APP_UNSPLASH_ID}`;
  const fetchPhoto = async (e) => {
    e.preventDefault();
    await axios
      .get(url)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <UnsplashContext.Provider value={{ searchString }}>
      {props.children}
    </UnsplashContext.Provider>
  );
}

export default UnsplashContextProvider;
