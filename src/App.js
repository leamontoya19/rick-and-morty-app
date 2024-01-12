import React, {useEffect, useState, useSyncExternalStore} from "react"; //Hook useEffect nos permite manejar efectos colaterales, como la llamada de red, en este caso la llamada a la API.
import Navbar from "./components/Navbar";



function App() {

  useSta

  const initialUrl = "https://rickandmortyapi.com/api/character"

  const fetchCharacters = () =>{
    fetch(initialUrl)
    .then(response => response.json())
    .then(data =>console.log(data.results))
    .catch(error => console.log(error))
  };

  useEffect(() =>{
    fetchCharacters(initialUrl);
  }, [])

  return ( 
    <Navbar brand="Rick & Morty App" />
  );
}

export default App;
