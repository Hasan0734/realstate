import nc from "next-connect";
import slugify from "slugify";
import Category from "../../../../models/Category";
import db from "../../../../utils/db";
import { onError } from "../../../../utils/error";

const handler = nc({ onError });

handler.post(async (req, res) => {
  const { categoryName } = req.body;
  try {
    await db.connect();
    const category = new Category({
      categoryName,
      categorySlug: slugify(`${categoryName}`, "-"),
    });
    if (await category.save()) {
      await db.disconnect();
      return res.send({
        success: true,
        message: "Category added successfully",
      });
    }
  } catch (err) {
    res.send({
      error: "Already added category",
    });
  }
});

export default handler;
