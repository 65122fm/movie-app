import React from "react";
import "./FavouriteListsPage.css";

const FavouriteListsPage = ({ finalLists }) => {
  return (
    <div className="favourite-lists-page">
      <h1 className="title">Favourite Lists</h1>
      {finalLists.length === 0 ? (
        <p className="empty-message">Heç bir list yoxdur.</p>
      ) : (
        finalLists.map((list, idx) => (
          <div key={idx} className="list-container">
            <h2 className="list-title">{list.name}</h2>
            <ul className="movie-list">
              {list.movies.map((movie, i) => (
                <li key={i} className="movie-item">
                  <span className="movie-title">{movie.Title}</span>
                  <button
                    className="imdb-link-btn"
                    onClick={() =>
                      window.open(
                        `https://www.imdb.com/title/${movie.imdbID}/`,
                        "_blank"
                      )
                    }
                  >
                    IMDb Link
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))
      )}
    </div>
  );
};

export default FavouriteListsPage;