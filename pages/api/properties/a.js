import nc from 'next-connect';
import db from '../../../utils/db';
import Property from '../../../models/Property';
const handler = nc();

handler.post(async (req, res) => {
  await db.connect();
  const properties = await Property.find({amenities: {$all: req.body}});
  await db.disconnect();
  res.send(properties);
});

export default handler;
