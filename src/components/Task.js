import React, { useState,useContext } from "react";
import { useSelector } from "react-redux";
import TaskModal from "../modals/TaskModal";
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import UserContext from "../searchInput/UserContext";
function Task({ colIndex, taskIndex }) {

  const boards = useSelector((state) => state.boards);
  const board = boards.find((board) => board.isActive === true);
  const columns = board.columns;
  const col = columns.find((col, i) => i === colIndex);
  const task = col.tasks.find((task, i) => i === taskIndex);
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  const [value, setValue] = React.useState(2);
  let completed = 0;
  let subtasks = task.subtasks;

  subtasks.forEach((subtask) => {
    if (subtask.isCompleted) {
      completed++;
    }
  });
  
  const { users,setSelectedUser } = useContext(UserContext);
  const handleCardClick = (user) => {
    setSelectedUser(user);
  };
  const handleOnDrag = (e) => {
    e.dataTransfer.setData(
      "text",
      JSON.stringify({ taskIndex, prevColIndex: colIndex })
    );
  };
  
  return (
    <div>
      {users.map((user) => (
      <div
        onClick={() => {
          setIsTaskModalOpen(true);
        }}
        draggable
        onDragStart={handleOnDrag}
        className=" w-[280px] first:my-5 rounded-lg  bg-white  dark:bg-[#2b2c37] shadow-[#364e7e1a] py-6 px-3 shadow-lg hover:text-[#635fc7] dark:text-white dark:hover:text-[#635fc7] cursor-pointer mt-2"
        
      >
         <ul>
          <li key={user.login.uuid} onClick={() => handleCardClick(user)}>
            <p className=" font-bold text-xl tracking-tighter mt-0 text-gray-500">{`${user.name.first}`}</p>
            <p className=" font-semibold text-xl tracking-tighter mt-0 text-gray-500">{`${user.name.last}`}</p>
            <hr />
          </li>
      </ul>
      
        <p className=" font-bold text-xs tracking-tighter mt-2 text-gray-500">
          #{completed} requests
        </p>
        
        
        <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Typography component="legend"></Typography>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
    </Box>
      </div>
       ))}
      {isTaskModalOpen && (
        <TaskModal
          colIndex={colIndex}
          taskIndex={taskIndex}
          setIsTaskModalOpen={setIsTaskModalOpen}
        />
      )}
    
    </div>
  );
}

export default Task;
