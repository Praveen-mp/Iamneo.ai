// UserContext.js
import { createContext, useEffect, useState } from 'react';
import axios from 'axios';
const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [searchName, setSearchName] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  
  
  useEffect(() => {
    fetch("/home").then(
      (response)=>response.json()
    ).then(
       data=>{
        setUsers(data.results);
       }
    )

}, []);
// useEffect(() => {
//   // Fetch data from the API and update the users state
//   fetch('https://randomuser.me/api/?results=10')
//     .then((response) => response.json())
//     .then((data) => setUsers(data.results))
//     .catch((error) => console.error('Error fetching data:', error));
// }, []);
  useEffect(() => {
    const filteredUsers = users.filter((user) => {
      const fullName = `${user.name.first} ${user.name.last}`.toLowerCase();
      return fullName.includes(searchName.toLowerCase());
    });
    setFilteredUsers(filteredUsers);
  }, [searchName, users]);

  return (
    <UserContext.Provider value={{ users: filteredUsers, setSearchName, setSelectedUser,setFilteredUsers,
      selectedUser,setUsers
      
    }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
