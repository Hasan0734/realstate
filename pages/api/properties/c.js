import nc from "next-connect";
import db from "../../../utils/db";
import Property from "../../../models/Property";
const handler = nc();

handler.post(async (req, res) => {
  await db.connect();

  if (!req.body.monthlyRent) {
    const properties = await Property.find(req.body);
    await db.disconnect();
    res.send(properties);
  } else {
    const rentSplit = req.body?.monthlyRent.split("-");

    const properties = await Property.find({
      ...req.body,
      monthlyRent: {
        $gte: Number(rentSplit[0]),
        $lte: Number(rentSplit[1]),
      },
    });
    await db.disconnect();
    res.send(properties);
  }
});

export default handler;
