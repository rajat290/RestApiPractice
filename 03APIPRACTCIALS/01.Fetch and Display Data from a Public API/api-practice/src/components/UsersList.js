// // tried using the axios 
// // but getting some kind of issues 

// import React, { useState, useEffect } from 'react'
// import axios from 'axios'
// // import { response } from 'express';

// const UsersList = () => {
//     const [users, setUsers] = useState([]);
//     const [Loading, setLoading] = useEffect(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         axios.get("https://jsonplaceholder.typicode.com/users") //API call using AXIOS
//             .then((response) => {
//                 setUsers(response.data); // Axios automatically converts to JSON 
//                 setLoading(false);
//             })
//             .catch((error) => {
//                 setError(error.message);
//                 setLoading(false);
//             });
//     }, []);
//     if (Loading) return <p> Loading users...</p>;
//     if (error) return <p> {error} </p>;
//     return (
//         <div>
//             <h1> USers List (Axios) </h1>
//          <ul>
//             {users.map((user) => {
//                 <li key={user.id}>
//                     <strong> Name:</strong> {user.name} <br />
//                     <strong> Email: </strong> {user.email} <br /> 
//                     <strong> Phone: </strong> {user.phone} <br />
//                 <hr />
                
//                 </li>
//             })}
//          </ul>
//         </div>
//     );


// };

// export default UsersList;