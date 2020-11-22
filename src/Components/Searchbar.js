import React from 'react';
import './Searchbar.css';


const Searchbar = ({ searchData }) => {

  const searchText = searchData.searchText;
  const setSearchText = searchData.setSearchText;
  const handleSearch = searchData.handleSearch;

  return (
      <div className="searchbar">
        <form name="search" onSubmit={(e) => handleSearch(e)}>
          <div className="block-button">
            <button className="search-icon">L</button>
          </div>
          <div className="block-search">
            <input className="search" onChange={(e) => setSearchText(e.target.value)} type="text" value={searchText}></input>
          </div>
        </form>
      </div>
  )
}

export default Searchbar;
