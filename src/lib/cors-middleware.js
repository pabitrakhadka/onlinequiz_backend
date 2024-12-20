import Cors from 'cors';
import initMiddleware from './init-middleware';

// Initialize the CORS middleware with desired options
const ALLOWED_ORIGINS = process.env.ALLOWED_ORIGINS
    ?.split(",")
    .map(e => e.trim());
console.log(ALLOWED_ORIGINS);

const cors = initMiddleware(
    Cors({
        origin: (origin, callback) => {
            if (ALLOWED_ORIGINS.includes(origin) || !origin) {
                callback(null, true);
            } else {
                callback(new Error('Not allowed by CORS'));
            }
        },

        credentials: true,
    },),


);

export default cors;