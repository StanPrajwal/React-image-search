import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./image.css";
function Imagesearch() {
  const [photos, setPhotos] = useState([]);
  let navigate = useNavigate();
  let array = [];
  const [search, setSearch] = useState("");

  const user = "kEacMvpU7_00uGQ_SG3ztYPAgNIpoEfU0SZNBx1qjLQ";
  function handleSubmit(e) {
    let url = `https://api.unsplash.com/search/photos?page=1&per_page=30&query=${search}&client_id=${user}`;
    console.log(url);
    e.preventDefault();
    axios
      .get(url)
      .then((res) => {
        setPhotos(res.data.results);
        console.log(res.data.results);
      })
      .catch((e) => console.log(e));
  }
  function bookmark(e) {
    array.push(e.target.src);
  
  }

  return (
    <div id="fullcontainer">
      <div>
        <span id="heading">React Photo Search</span>
        <button
          id="bookmark"
          onClick={() => {
            navigate("/bookmark", {
              state: array,
            });
          }}
        >
          Bookmark
        </button>
        <br />
        <input type="text" onChange={(e) => setSearch(e.target.value)} />
        <button id="button" onClick={(e) => handleSubmit(e)}>
          search
        </button>
      </div>
      <div id="container">
        {photos.map((photo, index) => (
          <img
            onClick={(e) => bookmark(e)}
            key={index}
            src={photo.urls.small}
            alt={photo.user.bio}
          />
        ))}
      </div>
    </div>
  );
}

export default Imagesearch;
