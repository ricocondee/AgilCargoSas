const { verifyAccessToken } = require('../services/jwt.service');
const ApiError = require('../utils/api.error');

function authMiddleware(req, res, next) {
    const accessToken = req.headers.authorization ? req.headers.authorization.split(' ')[1] : '';
    try {
        if (accessToken == null || accessToken == "") {
            throw new ApiError("Token invalido.", 401);
        }
        const user = verifyAccessToken(accessToken);

        if (user._id && user.email) {
            console.log('Autorizado')
        }

        next();
    } catch ({ message, statusCode }) {
        res.status(401).json({ message: "Token invalido." });
    }
}

module.exports = authMiddleware;