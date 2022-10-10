import bcrypt from 'bcryptjs';
import nc from 'next-connect';
import Property from '../../../models/Property';
import User from '../../../models/User';
import { signToken } from '../../../utils/auth';
import db from '../../../utils/db';

const handler = nc();

handler.post(async (req, res) => {
  await db.connect();
  const user = await User.findOne({ email: req.body.email }).populate("wishlists", {Property});
  await db.disconnect();
  if (user && bcrypt.compareSync(req.body.password, user.password)) {
    const token = signToken(user);
    res.send({
      success: true,
      token,
      user
    });
  } else {
    res.send({ error: 'Invalid email or password' });
  }
});

export default handler;
