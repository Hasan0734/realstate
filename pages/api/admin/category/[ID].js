import nc from 'next-connect';
import Category from '../../../../models/Category';
import { isAdmin } from '../../../../utils/auth';
import db from '../../../../utils/db';

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
      const category = await Category.findByIdAndDelete({ _id: req.query.ID });
      if (category) {
        await db.disconnect();
        res.send({
          success: true,
          message: "Category deleted successfully",
        });
      } else {
        await db.disconnect();
        res.send({
          success: false,
          error: "Category not found",
        });
      }
    } catch (error) {
      await db.disconnect();
      res.send({
        error: "Category not found",
      });
    }
  });

export default handler;