import React from "react";
import { useNavigate } from "react-router-dom";
import "./FinalFavouriteList.css"; 

function FinalFavouriteList({ finalLists }) {
  const navigate = useNavigate();

  if (!finalLists || finalLists.length === 0) {
    return (
      <div className="final-list-empty">
        <p>Seçilmiş list yoxdur.</p>
      </div>
    );
  }

  const handleNavigate = () => {
    navigate("/lists");
  };

  return (
    <div className="final-list-container">
      <h3 className="final-list-title">Listlər</h3>
      <ul className="final-list">
        {finalLists.map((list, idx) => (
          <li key={idx} className="final-list-item">
            <button className="final-list-btn" onClick={handleNavigate}>
              {list.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FinalFavouriteList;