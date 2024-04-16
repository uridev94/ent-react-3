import { useEffect, useRef, useState } from "react";
import "./App.css";
import useFetch from "./Hooks/useFetch";
import LocationData from "./Components/LocationData";
import ResidentCard from "./Components/ResidentCard";

function App() {
  const [inputValue, setInputValue] = useState(
    Math.floor(Math.random() * 126) + 1
  );
  const [location, getLocation, isLoading, hasError] = useFetch();

  useEffect(() => {
    const url = `https://rickandmortyapi.com/api/location/${inputValue}`;
    getLocation(url);
  }, [inputValue]);

  const textInput = useRef();
  // console.log(location)
  const handleSubmit = (event) => {
    event.preventDefault();
    setInputValue(textInput.current.value.toLowerCase().trim());
    textInput.current.value = "";
  };

  return (
    <>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <div className="app">
          <div className="app__banner">
          </div>
          <h1>Rick & Morty</h1>
          <form className="app__form" onSubmit={handleSubmit}>
            <input className="app__input" type="text" ref={textInput} />
            <button className="app__btn">search</button>
          </form>
          {
          hasError || inputValue === "0" ? (
            <h2>Hey! you must provide an id from 1 to 126</h2>
          ) : (
            <>
              <LocationData location={location} />
              <div className="app__container">
                {location?.residents.map((resident) => (
                  <ResidentCard key={resident} url={resident} />
                ))}
              </div>
            </>)}
        </div>
      )}
    </>
  );
}

export default App;
