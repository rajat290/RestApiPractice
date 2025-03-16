// Exercise 2: PATCH Request (Updating Only One Field)

async function updateUserEmail(){
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/users/1',{
            method: 'PATCH',
            headers: {
                'content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: 'updated@example.com'
            })
        });
        let data = await response.json();
        console.log("User Email updated:",data);
    } catch (error) {
        console.log("Error:", error);
        
    }
}

updateUserEmail();