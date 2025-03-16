import React, { useState, useEffect } from 'react'

const UserComponent = () => {
    const [user, setUser] = useState(null);
    const [loading, setloading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                let response = await fetch('https://jsonplaceholder.typicode.com/users/1');
                    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
                let user = await response.json();
                setUser(user);

            } catch (error) {
                setError(error.massage);

            } finally{
                setloading(false);
            }
        };
        fetchUser();

    }, []);
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    return(
        <div>
            <h1>{user.name}</h1>
            <p>{user.email}</p>
            </div>

    );

};
export default UserComponent;
/*
📌 What’s New?
✅ Loading State (setLoading) → Displays "Loading..." until data arrives.
✅ Async/Await inside useEffect → Makes API call simpler.
✅ Handles errors & stops loading even if API fails.*/