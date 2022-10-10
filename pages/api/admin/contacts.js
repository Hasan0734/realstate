import nc from 'next-connect';
import Contact from '../../../models/Contact';
import { isAuth, isAdmin } from '../../../utils/auth';
import db from '../../../utils/db';
import { onError } from '../../../utils/error';

const handler = nc({
  onError,
});
handler.use(isAuth, isAdmin);

handler.get(async (req, res) => {
  await db.connect();
  const contact = await Contact.find({});
  await db.disconnect();
  res.send(contact);
});

export default handler;
