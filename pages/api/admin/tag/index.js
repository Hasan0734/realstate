import nc from "next-connect";
import slugify from "slugify";
import Tag from "../../../../models/Tag";
import db from "../../../../utils/db";
import { onError } from "../../../../utils/error";

const handler = nc({ onError });

handler.post(async (req, res) => {
  const { tagName } = req.body;
  try {
    await db.connect();
    const tag = new Tag({
      tagName,
      tagSlug: slugify(`${tagName}`, "-"),
    });
    if (await tag.save()) {
      await db.disconnect();
      return res.send({
        success: true,
        message: "Tag added successfully",
      });
    }
  } catch (err) {
    console.log(err)
    res.send({
      error: "Already added tag",
    });
  }
});

export default handler;
