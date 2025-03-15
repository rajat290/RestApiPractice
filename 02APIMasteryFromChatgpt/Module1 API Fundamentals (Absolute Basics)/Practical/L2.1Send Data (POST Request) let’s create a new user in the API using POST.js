const { response } = require("express");
const { data } = require("react-router-dom");

fetch('https://jsonplacehlder.typicode.com/users',{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: 'Rajat Tomar',
        email:'rajatsinghtomar@gmail.com'
    })
})

.then(response => response.json())
.then(data => console.log('User Created', data))
.catch(error => console.error('Error:, error'));
