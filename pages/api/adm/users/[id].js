import { getSession } from 'next-auth/react';
import { connectToDatabase } from '../../../../lib/db';
import { ObjectId } from "mongodb";

export default async function handler(req, res) {

    const session = await getSession({ req })
    if (!session || session.user.role !== "Admin") {
        res.status(401).json({ message: 'Not authenticated!' });
        return;
    }

    const { id } = await req.query
    const o_id = new ObjectId(id)

    const client = await connectToDatabase();
    const db = client.db();
    const { method } = req;

    switch (method) {
        case 'GET':
            try {
                const user = await db.collection('users').findOne({_id: o_id});
                const data = JSON.parse(JSON.stringify(user))
                res.status(200).json({ success: true, data: data })
            } catch (error) {
                console.log(error)
                res.status(400).json({ success: false });
            }
            break;
        case 'PUT':
            try {
                const mail = await req.body
                await db.collection('users').updateOne(
                    {_id: o_id},
                    { $set: { email: mail } }
                    );
                res.status(200).json({ success: true });
            } catch(error) {
                res.status(400).json({ success: false });
            }
            break;
        case 'DELETE':
            try {
                await db.collection('users').deleteOne(
                    {_id: o_id}
                    );
                client.close();
                res.status(200)
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        default:
            res.status(400).json({ success: false });
            break;
    }
}