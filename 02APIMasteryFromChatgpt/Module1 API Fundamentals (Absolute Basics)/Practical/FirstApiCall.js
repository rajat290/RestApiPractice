const { response } = require("express");

fetch('https://randomuser.me/api/')
.then(response => response.json())
.then (data => console.log(data))
.catch(error => console.error('Error:', error));

// 💡 What I Did:
// ✅ fetch() sent a request to the API
// ✅ The API returned JSON data
// ✅ You logged the response in the console

