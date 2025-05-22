import React, { useState } from "react";
import "./FavouriteBox.css"; 

const FavouriteBox = ({
  favourites,
  onRemove,
  finalLists,
  setFinalLists,
  setFavourites,
  onShowLists,
}) => {
  const [listName, setListName] = useState("");

  const handleAddFinal = () => {
    if (favourites.length === 0 || !listName.trim()) return;

    setFinalLists([...finalLists, { name: listName, movies: [...favourites] }]);
    setFavourites([]);
    setListName("");
  };

  return (
    <div className="favourite-box">
      <h2 className="favourite-box-title">Favourite Box</h2>
      {favourites.length === 0 ? (
        <p className="favourite-box-empty">Favourite box boşdur. Film əlavə edin.</p>
      ) : (
        <>
          {favourites.map((movie) => (
            <div key={movie.imdbID} className="favourite-item">
              <p className="favourite-item-title">{movie.Title}</p>
              <button className="remove-btn" onClick={() => onRemove(movie)}>
                ❌
              </button>
            </div>
          ))}
        </>
      )}
      <input
        type="text"
        placeholder="List adı..."
        value={listName}
        onChange={(e) => setListName(e.target.value)}
        className="list-name-input"
      />
      <button className="add-btn" onClick={handleAddFinal}>
        Add Favourite List
      </button>
      <button className="show-lists-btn" onClick={onShowLists}>
        Show Lists
      </button>
    </div>
  );
};

export default FavouriteBox;