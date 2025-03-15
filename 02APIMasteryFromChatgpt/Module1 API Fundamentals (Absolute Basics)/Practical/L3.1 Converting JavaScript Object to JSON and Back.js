// Converting JavaScript Object to JSON and Back

const user = {
    name: "Rajat",
    age: "25",
    occupation: "Software Engineer"
}

const jsonString = JSON.stringify(user);
console.log(jsonString); // Converts object to JSON string

// 📌 JSON to JavaScript Object (Parse)

const jsonObject = JSON.parse(jsonString);
console.log(jsonObject); // Converts JSON string back to JavaScript object



/*
 Why is this useful?

JSON.stringify() is needed when sending data to an API.
JSON.parse() is needed when receiving data from an API.
*/