async function deleteUser(){
    const User = await User.findOne({ where: { id: req.params.id } });
    if (!Userser) {
        return res.status(404).send({ message: 'User Not Found' });
    }
    await User.destroy();
    return res.status(200).send({ message: 'User deleted successfully' });
}


async function deleteTheUSer(){
    try {
        let response = await fetch ('https://jsonplaceholder.typicode.com/users/1',{
            method: 'DELETE',
            headers:{
                'Content-Type': 'application/json',
            }
        });
        let responseJson = await response.json();
        console.log(responseJson);
    } catch (error) {
        console.error(error);
    }
}

deleteTheUSer();

