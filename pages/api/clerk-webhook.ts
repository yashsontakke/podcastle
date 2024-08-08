// pages/api/clerk-webhook.ts

import { NextApiRequest, NextApiResponse } from 'next';
console.log("i am here ")

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        const event = req.body;

        // Handle different event types
        if (event.type === 'user.created') {
            const user = event.data;

            // Add the user to your database
            await addUserToDatabase(user);
        }

        res.status(200).json({ message: 'Webhook received' });
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
};

const addUserToDatabase = async (user: any) => {
    // Logic to add user to your database
    console.log('Adding user to database:', user);
    // Example: You can use Prisma, Mongoose, or any other ORM/database client
};

export default handler;
