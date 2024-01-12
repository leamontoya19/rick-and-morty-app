import React, {useEffect, useState} from "react"; //Hook useEffect nos permite manejar efectos colaterales, como la llamada de red, en este caso la llamada a la API.
import Navbar from "./components/Navbar";
import CharacterList from "./components/CharacterList";
import Pagination from "./components/Pagination";

function App() {

  const [characters, setCharacters] = useState([]);
  //const [info, setInfo] = useState({});
  //const url = "https://rickandmortyapi.com/api/character";
  const initialUrl = "https://rickandmortyapi.com/api/character"

  const fetchCharacters = () =>{
    fetch(initialUrl)
    .then(response => response.json())
    .then(data => setCharacters(data.results))
    .catch(error => console.log(error))
  };

  useEffect(() =>{
    fetchCharacters(initialUrl);
  }, [])

  return ( 
  <>
    <Navbar brand="Rick & Morty App" />
    
    <div className="container mt-5">
      <Pagination />
      <CharacterList characters={characters} />
      <Pagination />
    </div>
  </>
  );
}


export default App;
