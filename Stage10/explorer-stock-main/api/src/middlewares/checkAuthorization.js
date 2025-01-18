const AppError = require("../utils/AppError")

function checkAuthorization(resourceRole){
    return (request, response, next) => {
        const { role } = request.user;
        if(!resourceRole.includes(role)) throw new AppError("Unauthorized", 401)
        return next()
    }
}

module.exports = checkAuthorization