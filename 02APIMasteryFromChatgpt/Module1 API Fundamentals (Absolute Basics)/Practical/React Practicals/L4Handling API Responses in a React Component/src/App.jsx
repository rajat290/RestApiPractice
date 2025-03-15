import React,{useState, useEffect}  from 'react'

const UserComponent = () => {
  const [user, UserSet] = useState(null);
  const [error, setError] = useState(null);

useEffect (() =>{
  fetch('https://jsonplaceholder.typicode.com/users/1')
  .then(response => {
    if(!response.ok){
      throw new Error('Network response was not ok');
    }
    return response.json();

  })
  .then(data => setUser(data))
  .catch(error => setError(error.massage));
}, []);

if (error) return <p> Error: {error}</p>;
if (!user) return <p>Loading...</p>

return (
  <div> 
    <h2>User Info</h2>
    <p>Username: {user.username}</p>
    <p>email: {user.email}</p>
    <p>Phone: {user.phone}</p>
    
  </div>
);


};
export default UserComponent;