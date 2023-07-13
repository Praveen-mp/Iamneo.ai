import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearFilters, filterCards, setSearchText } from '../store/slices/card.slice';
import SearchIcon from '../assets/search.png';
import { Container } from '../styles/searchStyle';

const SearchInput = () => {
//   const searchText = useSelector(state => state.cards);
//   const dispatch = useDispatch();
//  console.log(searchText)
//   useEffect(() => {
//     if (searchText.length === 0) {
//       dispatch(clearFilters());
//       return;
//     } else {
//       dispatch(filterCards({}));
//     }
//   }, [searchText]);

  return (
    <div>
      <Container>
        <input
          type="search"
          placeholder="Search for cards titles..."
          // value={searchText}
          // onChange={(e) => dispatch(setSearchText(e.target.value))}
        />
        <img src={SearchIcon} width={30} alt="Search icon" />
      </Container>
      
    </div>
  );
};
export default SearchInput