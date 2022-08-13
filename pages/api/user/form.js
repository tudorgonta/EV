import { connectToDatabase } from '../../../lib/db';

async function handler(req, res) {
  if (req.method !== 'POST') {
    return;
  }

  const data = req.body;
  
  const { email, name, street, city, postcode, comments, car, brand , mob, status } = data;

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

  try {
    await db.collection('enq').insertOne({
      name: name,
      email: email,
      street: street,
      city: city,
      postcode: postcode,
      comments: comments,
      car: car,
      brand: brand,
      mob: mob,
      status: status,
    })

    res.status(200).json({ success: true })
  } catch(error){
    res.status(400).json({ success: false });
  }
}

export default handler;
