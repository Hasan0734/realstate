import nc from "next-connect";
import db from "../../../../utils/db";
import Blog from "../../../../models/Blog";

const handler = nc();

handler.get(async (req, res) => {
  await db.connect();
  const blogs = await Blog.find({}).populate({ path: "category" });

  const filtered = blogs.filter(
    (blog, i) => blog.category.categorySlug === req.query.category
  );
  await db.disconnect();
  res.send(filtered);
});

export default handler;
