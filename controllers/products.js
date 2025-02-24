const getAllProducts = async (req, res) => {
    res.status(200).json({msg: " i am getAllProducts"});
};

const getAllProductsTesting = async (req, res) => {
    res.status(200).json({
        msg: " i am also getAllProdcuts"
    });
};

module.exports = {getAllProducts, getAllProductsTesting};
