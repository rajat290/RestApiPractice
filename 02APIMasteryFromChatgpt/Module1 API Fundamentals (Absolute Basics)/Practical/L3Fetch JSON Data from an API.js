const { response } = require("express");

fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(data =>{
    console.log("Users List", data);
})
.catch(error => console.error('Error:', error));
