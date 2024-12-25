import { serialize } from 'cookie';

const setAuthCookies = async (res, accessToken, refreshToken) => {

    console.log('accessToken=', accessToken);
    console.log("refreshToken=", refreshToken);
    // Set the access token and refresh token cookies
    await res.setHeader('Set-Cookie', [
        // Access Token Cookie
        serialize('accessToken', accessToken, {
            httpOnly: true,   // Prevent JavaScript access to the cookie
            secure: true, // Only use HTTPS in production
            sameSite: 'None',  // Allow cross-origin requests
            maxAge: 2 * 24 * 60 * 60,   // Expires in 10 minutes
            path: '/',         // Available across all routes
        }),

        // Refresh Token Cookie
        serialize('refreshToken', refreshToken, {
            httpOnly: true,   // Prevent JavaScript access to the cookie
            secure: true,  // Only use HTTPS in production
            sameSite: 'None',  // Allow cross-origin requests
            maxAge: 30 * 24 * 60 * 60,  // Expires in 30 days
            path: '/',         // Available across all routes
        }),
    ]);
};

export default setAuthCookies;
