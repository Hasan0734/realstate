import nc from 'next-connect';
import Tag from '../../../../models/Tag';
import { isAdmin } from '../../../../utils/auth';
import db from '../../../../utils/db';

const handler = nc();

// handler.get(async (req, res) => {
//     if(req.query?.ID){
//         await db.connect();
//     const category = await Tag.findById(req.query.ID);
//         await db.disconnect();
//         res.send(category);
//     }
// });

handler.use(isAdmin).delete(async (req, res) => {
    try {
      await db.connect();
      const tag = await Tag.findByIdAndDelete({ _id: req.query.ID });
      if (tag) {
        await db.disconnect();
        res.send({
          success: true,
          message: "Tag deleted successfully",
        });
      } else {
        await db.disconnect();
        res.send({
          success: false,
          error: "Tag not found",
        });
      }
    } catch (error) {
      await db.disconnect();
      res.send({
        error: "Tag not found",
      });
    }
  });

// handler.put(async (req, res) => {

//     if(req.query?.ID){
//         if(req.query?.status){
//             await db.connect();
//             const update = await Tag.updateOne(
//                 { "_id": req.query.ID }, 
//                 { $set: { "status": req.query.status } }
//                )
    
//             if(update.modifiedCount){
//                 await db.disconnect();
//                 res.send({
//                     success: true,
//                 })
//             }
//         }else{
//             const { 
//                 firstName, 
//                 lastName, 
//                 gender, 
//                 mobile, 
//                 password, 
//                 _package, 
//                 _valid, 
//                 valid_, 
//                 payDate 
//               } = req.body;

//               await db.connect();
//               const update = await Member.updateOne(
//                 { "_id": req.query.ID }, 
//                 { $set: { 
//                     "firstName": firstName,
//                     "lastName": lastName, 
//                     "gender": gender, 
//                     "mobile": mobile, 
//                     "_package": _package, 
//                     "_valid": _valid, 
//                     "valid_": valid_
//                 }}
//               );
//               if(update.modifiedCount){
//                   await db.disconnect();
//                   res.send({
//                       success: true,
//                       message: 'Member updated successfully'
//                   })
//               }
//         }
//     }
// });

export default handler;