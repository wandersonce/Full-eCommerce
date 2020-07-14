import jwt from 'jsonwebtoken';
import config from './config';

//Creating a token to validate when use is navigating on the page
const getToken = (user) => {
    return jwt.sign(user, config.JWT_SECRET, {
        expiresIn: '48h'
    })
}

export { getToken }