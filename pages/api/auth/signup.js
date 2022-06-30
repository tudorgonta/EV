import { hashPassword } from '../../../lib/auth';
import { connectToDatabase } from '../../../lib/db';

async function handler(req, res) {
  if (req.method !== 'POST') {
    return;
  }

  const data = req.body;
  
  const { email, name, street, city, postcode, verifPass , car, brand , mob, password } = data;

  if (
    !email ||
    !email.includes('@') ||
    !password ||
    password.trim().length < 7
  ) {
    res.status(422).json({
      message:
        'Invalid input - password should also be at least 7 characters long.',
    });
    return;
  }

  const client = await connectToDatabase();

  const db = client.db();

  const existingUser = await db.collection('users').findOne({ email: email });

  if (existingUser) {
    res.status(422).json({ message: 'User exists already!' });
    client.close();
    return;
  }

  const hashedPassword = await hashPassword(password);

  const result = await db.collection('users').insertOne({
    name: name,
    email: email,
    password: hashedPassword,
    mob: mob,
    street: street,
    city: city,
    postcode: postcode,
    car: car,
    brand: brand,
    role: 'User',
  });

  res.status(201).json({ message: 'Created user!' });
  client.close();
}

export default handler;
