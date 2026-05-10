const jwt = require("jsonwebtoken");

function authmiddleware(req, res, next) {
    // Check both Authorization header (Bearer token) or custom token header
    const token = req.headers.authorization?.split(" ")[1] || req.headers.token;
    
    if (!token) {
        return res.status(403).json({
            message: "token not found"
        });
    }

    try {
        const decode = jwt.verify(token, "atlantision1234");
        const usersid = decode.usersid;
        
        if (usersid) {
            req.usersid = usersid;
            next();
        } else {
            return res.status(403).json({
                message: "invalid token structure"
            });
        }
    } catch (e) {
        return res.status(403).json({
            message: "invalid token"
        });
    }
}

module.exports = {
    authmiddleware
};
