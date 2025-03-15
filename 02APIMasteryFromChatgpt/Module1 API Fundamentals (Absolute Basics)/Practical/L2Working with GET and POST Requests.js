// Task 1: Fetch Data (GET Request)
// We will fetch a list of users from the JSONPlaceholder API, a free API for testing.

// 📌 Code (Run this in the browser console or in a JavaScript file)
fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));

/*
 What happens?
✅ The API returns a list of users, and you see them in the console.
*/