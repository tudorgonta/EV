import { connectToDatabase } from '../../../lib/db';

export default async function handler(req, res) {
    const client = await connectToDatabase();
    const db = client.db();

    const { method } = req;

    switch (method) {
        case 'GET':
            try {
                const charg = await db.collection('chargers').find({}).toArray();

                const data = JSON.parse(JSON.stringify(charg))

                client.close();
                res.status(200).json({ success: true, data: data })
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        default:
            res.status(400).json({ success: false });
            break;
    }
}