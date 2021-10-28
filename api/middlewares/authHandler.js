import jwt from 'jsonwebtoken';
import  HttpError  from 'http-errors';
import bcrypt from 'bcrypt';
import userModel from '../models/userModel.js'

// secret word before env
const SECRET = process.env.SECRET //'robSecret';

const authUser = (req, res, next) => {
    // we get whole token
   const token = getTokenFrom(req);

   const decodedToken = verifyToken(token);

    // error if we don't have it
    if(!authorization) next(HttpError(401, { message: "No Token Exists"}));

    const user = userModel.getOneUser({username:decodedToken.username});
    // once we have it , move forward
    (user == undefined) ? next(HttpError(401, { message: 'Invalid token'})) : next();

};

// Encrypt it
const encryptPassword = async (req, res, next) => {
    // trycatch as async
    try {

        const salt = await bcrypt.genSalt(10);

        const passwordHardsh = await bcrypt.hash(req.body.password, salt);

        req.body.password = passwordHardsh;

        next();
        
    } catch (error) {

        next(error);
        
    }
};
 // Decrypt
 const decryptPassword = (token) => jwt.decode(token);

const getTokenFrom = (req, res, next) => {

    const authorization = req.get('authorization');

    // auth and auth is a bearer token 'bearer '
    if((authorization) && (authorization.toLowerCase().startsWith('bearer '))){

        // leave behind the seven first letters
        return authorization.substring(7);
    } else {

        return null;
    };

};

// generate payload of jwt
// remember that the payload is an object of the user in my case
// importing a user will look something like this inside a createToken() function
// const payload = { sub: user.id, iat: moment().unix(), exp: moment().add(24, 'hours').unix}
const generateToken = (username, password) => jwt.sign({username: username, password: password}, SECRET);

// checks token
const verifyToken = (token) => jwt.verify(token, SECRET);

export default {
authUser,
encryptPassword,
generateToken,
verifyToken,
getTokenFrom,
decryptPassword
}