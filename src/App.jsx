import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import MovieCard from "./components/MovieCard";
import FavouriteBox from "./components/FavouriteBox";
import FavouriteListsPage from "./components/FavouriteListsPage";
import "./App.css";

const API_KEY = "b43c093";
const API_URL = `https://www.omdbapi.com/?apikey=${API_KEY}&type=movie`;

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [finalLists, setFinalLists] = useState([]);
  const [showLists, setShowLists] = useState(false); 

  const notFound = movies.length === 0 && searchTerm.trim() !== "";

  const fetchMovies = async (query) => {
    const response = await fetch(`${API_URL}&s=${query}`);
    const data = await response.json();
    if (data.Search) {
      setMovies(data.Search.slice(0, 10));
    } else {
      setMovies([]); 
    }
  };

  useEffect(() => {
    fetchMovies("marvel");
  }, []);

  const toggleFavourite = (movie) => {
    if (favourites.find((m) => m.imdbID === movie.imdbID)) {
      setFavourites(favourites.filter((m) => m.imdbID !== movie.imdbID));
    } else {
      setFavourites([...favourites, movie]);
    }
  };

  const removeFavourite = (movie) => {
    setFavourites(favourites.filter((m) => m.imdbID !== movie.imdbID));
  };

  return (
    <div className="app">
      <h1 className="title">MOVIE</h1>
      {showLists ? (
        <div>
          <button
            onClick={() => setShowLists(false)} 
            style={{
              background: "#343a40",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              padding: "6px 12px",
              cursor: "pointer",
              marginBottom: "10px",
            }}
          >
            Home Page
          </button>
          <FavouriteListsPage finalLists={finalLists} />
        </div>
      ) : (
        <div>
          <SearchBar
            onSearch={fetchMovies}
            setSearchTerm={setSearchTerm}
            searchTerm={searchTerm}
            notFound={notFound}
          />
          <div className="container">
            <div className="movie-list">
              {notFound ? (
                <p className="no-movies-message">Film tapılmadı.</p>
              ) : (
                movies.map((movie) => (
                  <MovieCard
                    key={movie.imdbID}
                    movie={movie}
                    isFavourite={favourites.some(
                      (m) => m.imdbID === movie.imdbID
                    )}
                    onFavouriteToggle={() => toggleFavourite(movie)}
                  />
                ))
              )}
            </div>
            <div className="side-panel">
              <FavouriteBox
                favourites={favourites}
                onRemove={removeFavourite}
                finalLists={finalLists}
                setFinalLists={setFinalLists}
                setFavourites={setFavourites}
                onShowLists={() => setShowLists(true)}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;