import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import UserTable from './components/UserTable';
import Navbar from './components/Navbar';

function App() {

  
  const [users, setUsers] = useState([])        // This hook is used to manage the state of the users data in the component.   
  const [search, setSearch] = useState('');     // This hook is used to manage the state of the search input in the component.

  const [order, setOrder] = useState('asc');    // This hook is used to manage the state of the order of the sorting in the component.
    
  const sorting = (col) => {                    // This function is used to sort the data in the table.

      if(col === 'address'){
        let sorted;
        if(order === 'asc'){
            sorted = users.sort((a,b) => {
                return a[col].city > b[col].city ? 1 : -1     // This is used to sort the data by city.
            });
            };
            setUsers([...sorted])

      } else if(col === 'company'){
          let sorted;
          if(order === 'asc'){
              sorted = users.sort((a,b) => {
                  return a[col].name > b[col].name ? 1 : -1   // This is used to sort the data by company name.
              });
              };
              setUsers([...sorted])
      } else {
        let sorted;
        if(order === 'asc'){
            sorted = users.sort((a,b) => {
                return a[col] > b[col] ? 1 : -1               // This is used to sort the data by id, name, username, email.
            });
            };
            setUsers([...sorted])
      }
  }
  
  const onSortClick = (e) => {                                // This function is used to change the order of the sorting.
    sorting(e);
  }

  const onSearch = (e) => {                                   // This function is used to manage the state of the search input.
    setSearch(e.target.value);
  };

  useEffect(() => {
    axios
    .get('https://jsonplaceholder.typicode.com/users')        // This is used to fetch the data from the API.
    .then(res => {
      setUsers(res.data)
    })
    .catch(err => {console.log(err)})                         // This is used to catch any errors.
  }, [])


  return (
    <div className="App">
      <Navbar onSearch={onSearch} />                                              {/* This is used to render the Navbar component. */}
      <UserTable users={users} search={search} onSortClick={onSortClick}/>        {/* This is used to render the UserTable component. */}
    </div>
  );
}

export default App;
