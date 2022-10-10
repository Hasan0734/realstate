import nc from "next-connect";
import Blog from "../../../models/Blog";
import db from "../../../utils/db";
import Category from "../../../models/Category";

const handler = nc();

handler.get(async (req, res) => {
  try {
    await db.connect();
    const blogs = await Blog.find({}).populate("category", {Category} );
    await db.disconnect();
    res.send(blogs);
  } catch (error) {
    await db.disconnect();
    res.send(blogs);
  }
});

export default handler;
