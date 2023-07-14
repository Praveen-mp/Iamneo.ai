import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "./components/Header";
import Home from "./components/Home";
import EmptyBoard from './components/EmptyBoard';
import boardsSlice, * as boardActions from "./store/slices/boards.slice";
import SearchInput from "./components/SearchBar";
import { SearchContext } from "./searchInput/SearchContext";
import { useContext } from "react";
function App() {
  const [isBoardModalOpen, setIsBoardModalOpen] = useState(false);
  const dispatch = useDispatch();
  const { searchQuery } = useContext(SearchContext);
  const boards = useSelector((state) => {
    console.log(state);
    return state.boards
  });
 
  // console.log(boards);
  const activeBoard = boards.find((board) => board.isActive);
  if (!activeBoard && boards.length > 0)
    dispatch(boardActions.setBoardActive({ index: 0 }));
  return (
    <div className=" overflow-hidden  overflow-x-scroll">
      
      <>
        {boards.length > 0 ?
        <>
        <Header
          setIsBoardModalOpen={setIsBoardModalOpen}
          isBoardModalOpen={isBoardModalOpen}
        />
        <Home
          setIsBoardModalOpen={setIsBoardModalOpen}
          isBoardModalOpen={isBoardModalOpen}
        />
        </>
        :
        <>
          <EmptyBoard type='add'/>
        </>
      }
      </>
    </div>
  );
}

export default App;
