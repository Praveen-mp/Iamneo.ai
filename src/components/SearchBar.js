import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearFilters, filterBoards, setSearchText,searchReducer } from '../store/slices/boards.slice';
import SearchIcon from '../assets/search.png';
import { Container } from '../styles/searchStyle';
import { useContext,createContext } from 'react';
import { SearchContext } from '../searchInput/SearchContext';
const SearchInput = () => {
  const { searchQuery, updateSearchQuery } = useContext(SearchContext);
  
  const handleSearch = (e) => {
    updateSearchQuery(e.target.value);
  };
  return (
    <div>
      <Container>
        <input
          type="search"
          placeholder="Search for cards titles..."
          value={searchQuery} onChange={handleSearch}
        />
        <img src={SearchIcon} width={30} alt="Search icon" />
      </Container>
      
    </div>
  );
};
export default SearchInput