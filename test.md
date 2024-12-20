Knowledge about status code:
200 OK : General susccess for Get,Post, or put request
201 Created: A resourece was successfully created (eg. user registration, new record in the database)
202 Accepted: Request receive, but processing is pending..

204 No Content : Request processed, no contenet to return (eg. Delete request)


Get cookies:
import { parse } from "cookie";

export default function handler(req, res) {
    // Parse cookies from request headers
    const cookies = req.headers.cookie ? parse(req.headers.cookie) : {};

    // Retrieve a specific cookie
    const accessToken = cookies.accessToken || "No token found";

    res.status(200).json({ token: accessToken });
}


Combining Server-side and Client-side Cookies
Get Cookies in getServerSideProps (Server-Side Rendering):
To access cookies on the server side in a Next.js page:

javascript
Copy code
import { parse } from "cookie";

export async function getServerSideProps({ req }) {
    const cookies = req.headers.cookie ? parse(req.headers.cookie) : {};
    const accessToken = cookies.accessToken || null;

    return {
        props: { accessToken },
    };
}

export default function Home({ accessToken }) {
    return <div>Access Token: {accessToken || "No token found"}</div>;
}