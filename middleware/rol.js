const { handleHttpError } = require("../utils/handleError")
/**
 * Array con los roles permitidos
 * @param {*} rol 
 * @returns 
 */
const checkRol = (roles) => (req, res, next) => {
    try {
        const { user } = req;
        console.log({ user })
        const rolesByUser = user.role;
        const checkValueRol = roles.some((rolSingle) => rolesByUser.includes(rolSingle))
        if (!checkValueRol) {
            handleHttpError(res, "USER NOT PERMISSIONS", 403)
            return
        }
        next();
    } catch (e) {
        handleHttpError(res, "ERROR PERMISSIONS", 403)
    }
}

module.exports = checkRol