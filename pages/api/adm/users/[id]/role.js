import { getSession } from 'next-auth/react';
import { connectToDatabase } from '../../../../../lib/db';
import { ObjectId } from "mongodb";

export default async function handler(req, res) {

    const session = await getSession({ req })
    if (!session || session.user.role !== "Admin") {
        res.status(401).json({ message: 'Not authenticated!' });
        return;
    }

    const { id } = req.query
    const o_id = new ObjectId(id)

    const client = await connectToDatabase();
    const db = client.db();
    const { method } = req;

    switch (method) {
        case 'PUT':
            try {
                const status = req.body
                await db.collection('users').updateOne(
                    {_id: o_id},
                    { $set: { 
                        role: status
                    } }
                    );
                client.close();
                res.status(200).json({ success: true })
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break; 
        default:
            res.status(400).json({ success: false });
            break;
    }
}