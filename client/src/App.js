import './App.css';
import React, { useState } from 'react';
import { FcSettings } from 'react-icons/fc';
import { BsPersonSquare, BsSearch } from 'react-icons/bs';

let user = "Leland";

function MemeAppHeader(props) {
  return (
    <header>
      <h1>Image Social Media App</h1>
      <h2> <FcSettings /> <BsPersonSquare /> {props.name} </h2>
    </header>
  ) 
}

function SearchBar(props) {
  return (
    <div>
      <input type="text"></input>
      <h2> <BsSearch /> </h2>
    </div>
  )
}

function MainGallery(props) {
  return (
    <div>
      <hr></hr>

      <hr></hr>
    </div>
  )
}

/*
function previewImage(event) {
  console.log("here");
  const files = event.target.files;
  const imageSource = files[0].name;
  console.log(files);
  let imgDisplay = document.getElementById('image-preview');
  imgDisplay.src = imageSource;
}
*/

let previewImage = function(event) {
  let image = document.getElementById('image-preview');
  image.src = URL.createObjectURL(event.target.files[0]);
  console.log(event.target.files[0]);
}

function PostImage(props) {
  const [imageSrc, setImageSrc] = useState("");
  
  return ( 
    <div>
      <hr></hr>
      <img id="image-preview" src={imageSrc} alt="your-upload" accept="image/*" width={200} height={200}></img>
      <form action="http://192.168.0.100:8080/uploadImage" method="POST" encType="multipart/form-data">
        <input name="image" id='image-input' type="file" onChange={event => previewImage(event)}></input>
        <button type="submit">Upload Image</button>
      </form>
    </div>
  ) 
}

function App() {
  return (
    <main>
      <MemeAppHeader name={user} />
      <SearchBar />
      <MainGallery />
      <PostImage />
    </main>
  );
}

export default App;
