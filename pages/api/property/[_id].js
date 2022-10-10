import nc from 'next-connect';
import Property from '../../../models/Property';
import { isAdmin } from '../../../utils/auth';
import db from '../../../utils/db';

const handler = nc();

handler.get(async (req, res) => {
  await db.connect();
  const property = await Property.findById(req.query._id);
  await db.disconnect();
  res.send(property);
});



handler.use(isAdmin).delete(async (req, res) => {
  try {
    await db.connect();
    const property = await Property.findByIdAndDelete({ _id: req.query._id });
    if (property) {
      await db.disconnect();
      res.status(200).json({
        success: true,
        message: "Property deleted successfully",
      });
    } else {
      await db.disconnect();
      res.status(404).json({
        success: false,
        error: "Property not found",
      });
    }
  } catch (error) {
    await db.disconnect();
    res.status(404).json({
      error: "Property not found",
    });
  }
});

export default handler;
