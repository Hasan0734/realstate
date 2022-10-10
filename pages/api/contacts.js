import nc from 'next-connect';
import db from '../../utils/db';
import Contact from '../../models/Contact';

const handler = nc();

handler.get(async (req, res) => {
  await db.connect();
  const contacts = await Contact.find({});
  await db.disconnect();
  res.json(contacts.reverse());
});

export default handler;
