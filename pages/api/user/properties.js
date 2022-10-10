import nc from 'next-connect';
import db from '../../../utils/db';
import { isAuth } from '../../../utils/auth';
import Property from '../../../models/Property';

const handler = nc();

handler.use(isAuth).get(async (req, res) => {
  await db.connect();
  const properties = await Property.find({
    _owner: req.user._id
  })

  await db.disconnect();
  res.send(properties);
});

export default handler;