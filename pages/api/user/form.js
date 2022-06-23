import { connectToDatabase } from '../../../lib/db';

async function handler(req, res) {
  if (req.method !== 'POST') {
    return;
  }

  const data = req.body;
  
  const { email, name, street, city, postcode, comments, car, brand , mob } = data;

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

  const client = await connectToDatabase();

  const db = client.db();

  const result = await db.collection('enq').insertOne({
    name: name,
    email: email,
    street: street,
    city: city,
    postcode: postcode,
    comments: comments,
    car: car,
    brand: brand,
    mob: mob,
  });

  res.status(201).json({ message: 'Created enq!' });
  client.close();
}

export default handler;
