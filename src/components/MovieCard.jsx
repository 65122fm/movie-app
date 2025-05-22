import React from "react";

const MovieCard = ({ movie, isFavourite, onFavouriteToggle }) => {
  return (
    <div className="movie-card">
      <img src={movie.Poster} alt={movie.Title} />
      <h3>{movie.Title}</h3>
      <p>Year: {movie.Year}</p>
      <button onClick={onFavouriteToggle}>
        {isFavourite ? "Remove from Favourite" : "Favourite"}
      </button>
    </div>
  );
};

export default MovieCard;