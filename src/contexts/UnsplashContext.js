import React, { useReducer, useEffect } from "react";
import spinner from "../assets/ajax-loader.gif";
import SearchForm from "../component/form/SearchForm";
import { initialState, reducer } from "../reducers/reducer";
import axios from "axios";
import Card from "../component/cards/Card";


const baseUrl = "https://api.unsplash.com/search/photos";
function UnsplashContext() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios.get(baseUrl).then((res) => {
      dispatch({
        type: "SEARCH_PHOTOS_SUCCESS",
        payload: res.data.Search,
      });
    });
  }, []);

  const search = (searchValue) => {
    dispatch({
      type: "SEARCH_PHOTOS_REQUEST",
    });

    axios
      .get(
        `https://api.unsplash.com/search/photos?page=1&query=${searchValue}&client_id=${process.env.REACT_APP_UNSPLASH_ID}`
      )
      .then((res) => {
        if (res.data.Response === "True") {
          dispatch({
            type: "SEARCH_PHOTOS_SUCCESS",
            payload: res.data.Search,
          });
        } else {
          dispatch({
            type: "SEARCH_PHOTOS_FAILURE",
            error: res.data.Error,
          });
        }
      });
  };

  const { pictures, errorMessage, loading } = state;

  const retrievedPhotos =
    loading && !errorMessage ? (
      <img src={spinner} alt="Loading spinner" className="spinner" />
    ) : errorMessage ? (
      <div className="errorMessage">{errorMessage}</div>
    ) : (
      pictures.map((pic, index) => {
        <Card pic={pic} />;
      })
    );

  return (
    <div className="m-container">
      <SearchForm search={search} />
      <div className="retrieved">{retrievedPhotos}</div>
    </div>
  );
}

export default UnsplashContext;
