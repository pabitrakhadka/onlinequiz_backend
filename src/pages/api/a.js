import nc from 'next-connect';
import middleware from '@/middleware'; // Import the middleware

const handler = nc()
    .use(middleware) // Apply the middleware
    .get((req, res) => {
        res.status(200).json({ message: 'Hello from Next.js with CORS!' });
    });

export default handler;
