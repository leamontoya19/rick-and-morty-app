import React, {useEffect, useState} from "react"; //Hook useEffect nos permite manejar efectos colaterales, como la llamada de red, en este caso la llamada a la API.
import Navbar from "./components/Navbar";
import CharacterList from "./components/CharacterList";
import Pagination from "./components/Pagination";

function App() {

  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});
  const initialUrl = "https://rickandmortyapi.com/api/character"

  const fetchCharacters = (url) =>{
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
      setCharacters(data.results);
      setInfo(data.info);
    })  
    .catch(error => console.log(error))
  };

  const onPrevious = () => {
    fetchCharacters(info.prev)

  }

  const onNext = () => {
    fetchCharacters(info.next)
    
  }

  useEffect(() =>{
    fetchCharacters(initialUrl);
  }, [])

  return ( 
  <>
    <Navbar brand="Rick & Morty App" />
    
    <div className="container mt-5">
      <Pagination
       prev={info.prev}
       next={info.next} 
       onPrevious={onPrevious} 
       onNext={onNext}
      />
      <CharacterList characters={characters} />
      <Pagination 
       prev={info.prev}
       next={info.next} 
       onPrevious={onPrevious} 
       onNext={onNext}
      />
    </div>
  </>
  );
}


export default App;
