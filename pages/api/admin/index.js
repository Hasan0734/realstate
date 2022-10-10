import nc from "next-connect";
import bcrypt from "bcryptjs";
import Admin from "../../../models/Admin";
import db from "../../../utils/db";
import { signToken } from "../../../utils/auth";

const handler = nc();

handler.get(async (req, res) => {
  await db.connect();
//   const admin = await Admin.find({  });
    res.send(
        {
            error: 'this is error'
        }
    )
});

export default handler;
