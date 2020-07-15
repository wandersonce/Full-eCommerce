import jwt from 'jsonwebtoken';
import config from './config';

//Creating a token to validate when use is navigating on the page
const getToken = (user) => {
    console.log(user);
    return jwt.sign(
        {
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
        },
        config.JWT_SECRET,
        {
            expiresIn: '48h',
        }
    );
};

export { getToken }