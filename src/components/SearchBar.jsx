const SearchBar = ({ onSearch, searchTerm, setSearchTerm, notFound }) => {
  const handleSearch = () => {
    if (searchTerm.trim() !== "") {
      onSearch(searchTerm);
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search movies..."
      />
      <button onClick={handleSearch}>Search</button>
      {notFound && (
        <div style={{ color: "red", marginTop: "8px" }}>
          Film tapılmadı.
        </div>
      )}
    </div>
  );
};

export default SearchBar;