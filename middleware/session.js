const { handleHttpError } = require("../utils/handleError");
const { verifyToken } = require("../utils/handleJWT");
const { usersModel } = require("../models")

const authMiddleware = async (req, res, next) => {
    try {
        if (!req.headers.authorization) {
            handleHttpError(res, "NEED SESSION", 401);
            return
        }

        const token = req.headers.authorization.split(' ').pop();
        const dataToken = await verifyToken(token)

        if (!dataToken._id) {
            handleHttpError(res, "ERROR ID TOKEN", 401);
            return
        }

        const user = await usersModel.findById(dataToken._id)
        req.user = user

        next()

    } catch (e) {
        handleHttpError(res, "NOT SESSION", 401);
    }
}

module.exports = authMiddleware