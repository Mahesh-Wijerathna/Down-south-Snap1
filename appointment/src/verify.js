const axios = require('axios');

module.exports = async function (req, res, next) {
    console.log("Inside verifyToken.js");
    //return next();
    const token = req.query.token || req.headers['x-access-token'];
    //const token
    console.log("Token: ", token);

    if (!token) {
        res.status(401).send('Token not provided');
    }
    // console.log("JWT Token Key : " , process.env.JWT_TOKEN);

    try {
        console.log("Try to call auth service to verify token");
        await axios.get(`${process.env.REACT_APP_AUTH_URL}/api/v1/auth/verifytoken?token=${token}`, {
            headers: {
                'x-access-toke': token,

            },
            token: token
        })
            .then((res) => {
                console.log("Response from auth service: ");
                console.log(`statusCode: ${res.statusCode}`)
                console.log(res.data)
                if (res.data === 'valid') {
                    console.log("Token is valid");
                    return next();
                }
            })
            .catch((error) => {
                console.error(error)
            })

        //req.user = decoded;

    } catch (error) {
        console.log(error);
        res.status(400).send('Invalid token -cc');
    }

}