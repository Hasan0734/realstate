import nc from 'next-connect';
import db from '../../utils/db';
import Refer from '../../models/Refer';

const handler = nc();
handler.get(async (req, res) => {
  await db.connect();
  const refers = await Refer.find({});
  await db.disconnect();
  res.json(refers.reverse());
});

export default handler;
