import nc from 'next-connect';
import User from '../../../models/User';
import { isAuth, signToken } from '../../../utils/auth';
import db from '../../../utils/db';

const handler = nc();
handler.use(isAuth);


handler.use(isAuth).put(async (req, res) => {
    const { name, email, phoneNumber, password, updatePassword, image, wishlists } = req.body;
    await db.connect();
    if(updatePassword){
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(updatedPassword, salt);
        User.updateOne(
            { "_id": req.user._id }, 
            { $set: { 
                "name": name,
                "email": email,
                "phoneNumber": phoneNumber,
                "password": hashedPassword,
                "image": image,
                "wishlists": wishlists
            }},
            {returnOriginal: false})
            .then(user=>{
                if(user){
                    const token = signToken(user);
                    res.send({
                      success: true,
                      token,
                      user
                    });
                }
            })
    }else{
        User.findOneAndUpdate(
            { "_id": req.user._id }, 
            { $set: { 
                "name": name,
                "email": email,
                "phone": phoneNumber,
                "password": password,
                "image": image,
                "wishlists": wishlists
            }},
            {returnOriginal: false})
            .then(user=>{
                if(user){
                    const token = signToken(user);
                    res.send({
                      success: true,
                      token,
                      user
                    });
                }
            })
    }
});

export default handler;
