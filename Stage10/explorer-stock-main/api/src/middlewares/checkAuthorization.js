const AppError = require("../utils/AppError")

function checkAuthorization(resourceRole){
    return (request, response, next) => {
        const { role } = request.user;
        if(role != resourceRole)  throw new AppError("Unauthorized", 401)

        return next()
    }
}

module.exports = checkAuthorization