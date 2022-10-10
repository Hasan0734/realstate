import nc from "next-connect";
import db from "../../../utils/db";
import Contact from "../../../models/Contact";
import { isAdmin } from "../../../utils/auth";

const handler = nc();

handler.use(isAdmin).delete(async (req, res) => {
    try {
      await db.connect();
      const blog = await Contact.findByIdAndDelete({ _id: req.query._id });
      if (blog) {
        await db.disconnect();
        res.status(200).json({
          success: true,
          message: "Contact deleted successfully",
        });
      } else {
        await db.disconnect();
        res.status(404).json({
            success: false,
          error: "Contact not found",
        });
      }
    } catch (error) {
      await db.disconnect();
      res.status(404).json({
        success: false,
        error: "Contact not found",
      });
    }
  });
  