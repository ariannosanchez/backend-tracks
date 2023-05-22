const customHeader = (req, res, next) => {
    try {
        const api_key = req.headers.api_key;
        if (api_key === 'ari1') {
            next();
        }
        else {
            res.status(403);
            res.send({ err: "API_KEY NO ES CORRECTA" });
        }
    } catch (err) {
        res.status(403);
        res.send({ err: "ALGO OCURRIO EN EL CUSTOM_HEADER" });
    }
};

module.exports = customHeader