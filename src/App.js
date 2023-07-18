import React, { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "./components/Header";
import Home from "./components/Home";
import EmptyBoard from './components/EmptyBoard';
import boardsSlice, * as boardActions from "./store/slices/boards.slice";
import TemporaryDrawer from "./components/Drawer";
function App() {
  const [isBoardModalOpen, setIsBoardModalOpen] = useState(false);
  const dispatch = useDispatch();
  const boards = useSelector((state) => {
    console.log(state);
    return state.boards
  });
 
  const activeBoard = boards.find((board) => board.isActive);
  if (!activeBoard && boards.length > 0)
    dispatch(boardActions.setBoardActive({ index: 0 }));
  // const [backend,setBackend] = useState([{}])
  
  return (
    <div className=" overflow-hidden  overflow-x-scroll">
      
      <>
        {boards.length > 0 ?
        <>
        {/* <TemporaryDrawer/> */}
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
