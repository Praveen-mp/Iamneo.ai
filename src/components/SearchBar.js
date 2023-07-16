// SearchBar.js
import React, { useContext } from 'react';
import UserContext from '../searchInput/UserContext';
import SearchIcon from '../assets/search.png';
import { Container } from '../styles/searchStyle';
const SearchBar = () => {
  const { searchName, setSearchName } = useContext(UserContext);

  const handleSearch = (event) => {
    setSearchName(event.target.value);
  };

  return (
    <div>
      <Container>
        <input
          type="search"
          placeholder="Search for cards titles..."
          value={searchName} onChange={handleSearch}
        />
        <img src={SearchIcon} width={30} alt="Search icon" />
      </Container>
      
    </div>
  );
};

export default SearchBar;
