
const checkAuth = (req, res, next) => {

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        console.log("Si tiene el token con bearer");
    }else{
        console.log("Si tiene el token con bearer");github
    }

    const error = new Error('Token no valido o inexistente');
    res.status(403).json({ msg: error.message });

    next();

}

export default checkAuth;