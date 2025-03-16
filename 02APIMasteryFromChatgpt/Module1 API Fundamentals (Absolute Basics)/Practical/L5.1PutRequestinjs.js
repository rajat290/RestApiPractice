async function updateUser (){
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/users/1',{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',

            },
            body:JSON.stringify({
                "name": "Rajat",
                "email": "rajat@gmail.com",
                "phone": "1234567890",

            })

        });
        if (!response.ok){
            throw new Error(response.statusText);
        }
        let data = await response.json();
        console.log("User Updated:", data);

    } catch (error) {
        console.error("Error:", error);
        
    }
}

updateUser();
