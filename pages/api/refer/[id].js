import nc from 'next-connect';
import Refer from '../../../models/Refer';
import { isAdmin } from '../../../utils/auth';
import db from '../../../utils/db';

const handler = nc();

// handler.get(async (req, res) => {
//     if(req.query?.ID){
//         await db.connect();
//     const category = await Category.findById(req.query.ID);
//         await db.disconnect();
//         res.send(category);
//     }
// });

handler.use(isAdmin).delete(async (req, res) => {
    try {
      await db.connect();
      const refer = await Refer.findByIdAndDelete({ _id: req.query.id });
      if (refer) {
        await db.disconnect();
        res.send({
          success: true,
          message: "Refer deleted successfully",
        });
      } else {
        await db.disconnect();
        res.send({
          success: false,
          error: "Refer not found",
        });
      }
    } catch (error) {
      await db.disconnect();
      res.send({
        error: "Refer not found",
      });
    }
  });

export default handler;