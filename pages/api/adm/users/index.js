import { getSession } from 'next-auth/react';
import { connectToDatabase } from '../../../../lib/db';

export default async function handler(req, res) {

    const session = await getSession({ req })

    if (!session || session.user.role !== "Admin") {
        res.status(401).json({ message: 'Not authenticated!' });
        return;
      }

    const client = await connectToDatabase();
    const db = client.db();

    const { method } = req;

    switch (method) {
        case 'GET':
            try {
                const users = await db.collection('users').find({}).toArray();

                const data = JSON.parse(JSON.stringify(users))

                client.close();
                res.status(200).json({ success: true, data: data })
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        case 'POST':
            try {
                const data = req.body;
  
                const { email, name, street, city, postcode, car, brand , mob, role } = data;
                if (
                    !email ||
                    !email.includes('@')
                  ) {
                    res.status(422).json({
                      message:
                        'Invalid input - password should also be at least 7 characters long.',
                    });
                    return;
                  }

                  const result = await db.collection('users').insertOne({
                    name: name,
                    email: email,
                    street: street,
                    city: city,
                    postcode: postcode,
                    car: car,
                    brand: brand,
                    mob: mob,
                    role: role,
                  });
                
                  res.status(200).json({ success: true, message: 'Created enq!' });
                  client.close()
            } catch (error) {
                res.status(400).json({success: false})
            }
        default:
            res.status(400).json({ success: false });
            break;
    }
}