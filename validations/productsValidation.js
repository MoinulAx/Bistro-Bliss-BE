const checkId = (req, res, next) => {
    const { id } = req.params
    if(isNaN(id)){
        res.status(500).json("Please enter a valid number id")
    }else {
        return next()
    }
}

const clearWhiteSpace = (req, res, next) => {
    const { product_name, product_details, product_image } = req.body;

    req.body.product_name = product_name.trim()
    
    if(product_details){
        req.body.product_details = product_details.trim()
    }
    if(product_image){
        req.body.product_image = product_image.trim()
    }
  
    return next()
}

const checkNumber = (req, res, next) => {
    const { product_price, product_quantity} = req.body;
    if(isNaN(product_price)){
        res.status(500).json({ error: "Please enter valid number for product_price"})
    }else if(isNaN(product_quantity)){
        res.status(500).json({ error: "Please enter valid number for product_quantity"})
    }else {
        return next()
    }
}

const capitalizeWordsFirstLetter = (req, res, next) => {
    const { product_name, product_details} = req.body;

    const productName = product_name.split(" ").map(word => word[0].toUpperCase() + word.slice(1).toLowerCase()).join(" ")
    req.body.product_name = productName

    if(product_details) {
        const productDetails = product_details.split(" ").map(word => word[0].toUpperCase() + word.slice(1).toLowerCase()).join(" ")
        req.body.product_details = productDetails
    }

    return next()
}

module.exports = { checkId, clearWhiteSpace, checkNumber, capitalizeWordsFirstLetter }