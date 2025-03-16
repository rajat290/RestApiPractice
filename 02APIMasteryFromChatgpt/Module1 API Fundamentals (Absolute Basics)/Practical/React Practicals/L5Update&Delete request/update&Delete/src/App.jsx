import { useState } from 'react'
 const UpdateDeleteUser = () => {
  const [ email, setEmail] = useState('');
  const [ message, setMessage] = useState('');


  const updateEmail = async  () => {
    try {
      let response = await fetch ('https://jsonplaceholder.typicode.com/users/1',{
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'},
        
        body: JSON.stringify({ email })
      });
      setMessage("Email Updated Succesfully!");
    } catch (error) {
      setMessage(`Error: ${error.message}`);
      
    }
  };
  const deleteUser = async () => {
    setMessage("Deleting...");
    try {
      let response = await fetch('https://jsonplaceholder.typicode.com/users/1', { method: 'DELETE' });

      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

      setMessage("User Deleted Successfully!");
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    }
  };

  return (
    <div>
      <h2>Update/Delete User</h2>
      <input type="email" placeholder="New Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <button onClick={updateEmail}>Update Email</button>
      <button onClick={deleteUser}>Delete User</button>
      <p>{message}</p>
    </div>
  );
};

 export default UpdateDeleteUser