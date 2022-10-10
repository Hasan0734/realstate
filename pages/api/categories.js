import nc from 'next-connect';
import db from '../../utils/db';
import Category from '../../models/Category';

const handler = nc();

handler.get(async (req, res) => {
  await db.connect();
  const category = await Category.find({});
  await db.disconnect();
  res.json(category.reverse());
});

export default handler;