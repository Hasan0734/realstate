
import nc from "next-connect";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import db from "../../../../utils/db";
import { onError } from "../../../../utils/error";
import User from "../../../../models/User";

const handler = nc({ onError });

handler.post(async (req, res) => {

    const salt = await bcrypt.genSalt(10);
    
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    jwt.verify(req.body.token, process.env.JWT_SECRET, async(err, decode) => {
        if (err) {
            res.status(401).json({ 
                success: true,
                message: 'Something went wrong. Please try again.' 
            });
        } else {
            await db.connect();
            await User.findOneAndUpdate(
                { _id: decode._id },
                {
                  password: hashedPassword
                },
                { returnOriginal: false }
              ).then((user) =>
                res.send({
                  success: true,
                  message: "Password updated successfully",
                  user
                })
              );

            // res.send(decode);
        }
      });
});

export default handler;



