// pages/api/clerk-webhook.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { db } from '@vercel/postgres';

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
    const client = await db.connect();
    const { id: clerkId , image_url: imageUrl, first_name:name } = user;

    const {
        email_addresses: [{ id, email_address: email}]
      } = user;
      
      
    console.log(clerkId,email,imageUrl,name);

    const query = `
        INSERT INTO users (clerkId, email, imageUrl, name)
        VALUES ($1, $2, $3, $4)
        RETURNING id;
    `;

    try {
        const result = await client.query(query, [clerkId, email, imageUrl, name]);
        console.log('User added to database with generated id:', result.rows[0].id);
    } catch (error) {
        console.error('Error adding user to database:', error);
    } finally {
        client.release();
    }
};

export default handler;
