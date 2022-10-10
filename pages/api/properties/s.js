import nc from "next-connect";
import db from "../../../utils/db";
import Property from "../../../models/Property";

const handler = nc();

handler.get(async (req, res) => {
  const { location, bedrooms, budgets } = req.query;

  await db.connect();
  //   await db.properties.createIndex({areaName: "text", city: "text", state: "text"});

  if (Boolean(bedrooms) && Boolean(budgets)) {
    const budgestSplit = budgets.split("-");
    const properties = await Property.find({ bedrooms: bedrooms,
      monthlyRent: {$gte: Number(budgestSplit[0]), $lte: Number(budgestSplit[1])},
      $or: [
        { areaName: new RegExp(location, "i") },
        { state: new RegExp(location, "i") },
        { city: new RegExp(location, "i") },
      ]
    });
    await db.disconnect();
    res.send(properties);
  }else if(Boolean(bedrooms) && Boolean(!budgets)){
    
    const properties = await Property.find({ bedrooms: bedrooms,
      $or: [
        { areaName: new RegExp(location, "i") },
        { state: new RegExp(location, "i") },
        { city: new RegExp(location, "i") },
      ]
    });
    await db.disconnect();
    res.send(properties);
  }else if(Boolean(!bedrooms) && Boolean(budgets)){
    const budgestSplit = budgets.split("-");
    const properties = await Property.find({
      monthlyRent: {$gte: Number(budgestSplit[0]), $lte: Number(budgestSplit[1])},
      $or: [
        { areaName: new RegExp(location, "i") },
        { state: new RegExp(location, "i") },
        { city: new RegExp(location, "i") },
      ]
    });
    await db.disconnect();
    res.send(properties);
  }else{
    const properties = await Property.find({
      $or: [
        { areaName: new RegExp(location, "i") },
        { state: new RegExp(location, "i") },
        { city: new RegExp(location, "i") },
      ]
    });
    await db.disconnect();
    res.send(properties);
  }
});

export default handler;
