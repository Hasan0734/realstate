import nc from "next-connect";
import bcrypt from "bcryptjs";
import Admin from "../../../models/Admin";
import db from "../../../utils/db";
import { signToken } from "../../../utils/auth";

const handler = nc();

handler.post(async (req, res) => {
  await db.connect();
  const admin = await Admin.findOne({ email: req.body.email });
  await db.disconnect();
  if (admin && bcrypt.compareSync(req.body.password, admin.password)) {
    const token = signToken(admin);
    res.send({
      success: true,
      token,
      admin,
    });
  } else {
    res.status(401).send({ message: "Invalid Credentials" });
  }
});

export default handler;
