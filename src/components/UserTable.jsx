import React, {useEffect, useState} from 'react'
import '../styles/UserTable.css'

export default function UserTable({users, search, onSortClick}) {

    const [userCount, setUserCount] = useState(0);      // This is a state variable. It is used to store the count of users. It is initialized to 0.
    let count = 0;          

    useEffect(() => {
        setUserCount(count);            
    }, [users, search])                        // This is a hook. It is used to update the userCount state variable whenever the users or search variable changes.

  return (
    <div className='user-table table-responsive'>
        <div className="table-info-container">
            <span className="total-users">User Count: {userCount}</span>
            <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Sort
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <span className="dropdown-item"  onClick={() => {       // This is an event handler. It is used to handle the click event on the sort dropdown menu.
                    onSortClick('id')
                }}>
                    Id
                </span>
                <span className="dropdown-item" onClick={() => {        // This is an event handler. It is used to handle the click event on the sort dropdown menu.
                    onSortClick('name')
                }}>
                    Name
                </span>
                <span className="dropdown-item" onClick={() => {        // This is an event handler. It is used to handle the click event on the sort dropdown menu.
                    onSortClick('username')
                }}>
                    Username
                </span>
                <span className="dropdown-item" onClick={() => {        // This is an event handler. It is used to handle the click event on the sort dropdown menu.
                    onSortClick('email')
                }}>
                    Email
                </span>
                <span className="dropdown-item" onClick={() => {        // This is an event handler. It is used to handle the click event on the sort dropdown menu.
                    onSortClick('address')          
                }}>
                    City
                </span>
                <span className="dropdown-item" onClick={() => {        // This is an event handler. It is used to handle the click event on the sort dropdown menu.
                    onSortClick('company')
                }}>
                    Company
                </span>
            </div>
            </div>
        </div>
        <table className="table table-striped table-dark table-hover">                          {/* This is a table. It is used to display the user data. */}
            <thead style={{position: "sticky", top: 0, backgroundColor: "rgb(33,37,41)"}}>
                <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Username</th>
                <th scope="col">Email</th>
                <th scope="col">City</th>
                <th scope="col">Company</th>
                </tr>
            </thead>
            <tbody>
                {users.filter((user)=> {return search.toLowerCase()==='' ? user : user.name.toLowerCase().includes(search)}).map((user) => {        // This is a    map function. It is used to iterate over the users array and display the user data in the table.
                    count++;
                    return(
                        <tr key={user.id}>
                            <th scope="row">{user.id}</th>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.address.city}</td>
                            <td>{user.company.name}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
  )
}
