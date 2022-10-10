import nc from 'next-connect';
import Contact from '../../../../models/Contact';
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
      const contact = await Contact.findByIdAndDelete({ _id: req.query.id });
      if (contact) {
        await db.disconnect();
        res.send({
          success: true,
          message: "Contact deleted successfully",
        });
      } else {
        await db.disconnect();
        res.send({
          success: false,
          error: "Contact not found",
        });
      }
    } catch (error) {
      await db.disconnect();
      res.send({
        error: "Contact not found",
      });
    }
  });

export default handler;