async function fetchUserData(){
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        let data = await response.json();
        console.log("User Data:" , data);

    } catch (error) {
        console.error('Error fetching data:', error);
        
    }
}
fetchUserData();