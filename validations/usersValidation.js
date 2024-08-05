const checkId = (req, res, next) => {
    const { id } = req.params
    if(isNaN(id)){
        res.status(500).json("Please enter a valid number id")
    }else {
        return next()
    }
}

const clearWhiteSpace = (req, res, next) => {
    const { user_name, user_password, user_address} = req.body;

    req.body.user_name = user_name.trim();
    req.body.user_password = user_password.trim();
    req.body.user_address = user_address.trim();

    return next()
}

const checkPasswordLength = (req, res, next) => {
    const { user_password } = req.body;

    if( user_password.length < 8 ) {
        res.status(500).json("Please Enter a password at least 8 characters long")
    }else {
        return next()
    }
}

module.exports = { checkId, clearWhiteSpace, checkPasswordLength }