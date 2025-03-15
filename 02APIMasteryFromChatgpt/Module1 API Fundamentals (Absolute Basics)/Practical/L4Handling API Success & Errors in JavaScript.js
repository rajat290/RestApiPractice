const { response } = require("express");
const { data } = require("react-router-dom");

fetch('https://jsonplaceholder.typicode.com/users/1')
.then(response => {
    if (!response.ok){
throw new Error (`HTTP error! Status: ${response.status}`);    }
})
.then(data => {
    console.log(data);

})
.catch(error => {
    console.error('Error:', error);
});