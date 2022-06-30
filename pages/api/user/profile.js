import { getSession } from 'next-auth/react';
import { connectToDatabase } from '../../../lib/db';
import { hashPassword } from '../../../lib/auth';

export default async function handler(req, res) {

    const session = await getSession({ req })
    if (!session) {
        res.status(401).json({ message: 'Not authenticated!' });
        return;
    }

    const client = await connectToDatabase();
    const db = client.db();
    const { method } = req;

    switch (method) {
        case 'GET':
            try {
                const userEmail = session.user.email;
                const user = await db.collection('users').findOne({email: userEmail});
                const userData = JSON.parse(JSON.stringify(user))
                const enq = await db.collection('enq').findOne({email: userEmail});
                const enqData = JSON.parse(JSON.stringify(enq))
                res.status(200).json({ success: true, user: userData, enq: enqData })
            } catch (error) {
                console.log(error)
                res.status(400).json({ success: false });
            }
            break;
        case 'PATCH':
            try {
                const email = req.body.email
                const name = req.body.name
                const mob = req.body.mob
                const car = req.body.car
                const street = req.body.street
                const city = req.body.city
                const postcode = req.body.postcode
                const brand = req.body.brand
                const password = req.body.password
                const hashedPassword = await hashPassword(password);
                await db.collection('users').updateOne(
                    {email: email},
                    { $set: {
                        email: email,
                        name: name,
                        mob: mob,
                        car: car,
                        street: street,
                        city: city,
                        postcode: postcode,
                        brand: brand,
                        password: hashedPassword
                    }}
                    );
                res.status(200).json({ success: true });
            } catch(error) {
                res.status(400).json({ success: false });
            }
            break;
        default:
            res.status(400).json({ success: false });
            break;
    }
}