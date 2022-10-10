import nc from 'next-connect';
import bcrypt from 'bcryptjs';
import Admin from '../../../models/Admin';
import db from '../../../utils/db';
import { signToken } from '../../../utils/auth';

const handler = nc();

handler.post(async (req, res) => {
  await db.connect();
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);
  const newAdmin = new Admin({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword
  });
  const admin = await newAdmin.save();

  await db.disconnect();

  const token = signToken(admin);
  res.send({
      success: true,
      message: 'Registered successfully'
  });
});

export default handler;