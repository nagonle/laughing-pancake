import React, { useState } from 'react';
import Container from './Components/Container';
import Topbar from './Components/Topbar';
import './App.css';
import getProducts from './utils';

function App() {
  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searchedText, setSearchedText] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();

		const payload = {
      query: searchText,
      skip: 0,
      limit: 3000
    }
		const response = await getProducts(payload)
    const rawData = response.products;


    setSearchedText(searchText)
    if (searchText === '') {
      setData([]);
      setSearchedText('')
    } else {
      setData(rawData)
    }
  }

  return (
    <div>
      <div className="page">
        <div className="wrap">
            <Topbar searchData={{searchText, setSearchText, handleSearch}} />
            <Container searchData={{searchedText, data}} />
        </div>
      </div>
    </div>
  );
}

export default App;
