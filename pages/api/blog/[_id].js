import nc from "next-connect";
import db from "../../../utils/db";
import Blog from "../../../models/Blog";
import { isAdmin, isAuth } from "../../../utils/auth";

const handler = nc();

handler.post(async (req, res) => {
  if (req.query._id) {
    const { name, email, comment, _time } = req.body;
    await Blog.findOneAndUpdate(
      { _id: req.query._id },
      {
        $push: {
          comments: {
            name,
            email,
            comment,
            _time,
          },
        },
      },
      { returnOriginal: false }
    ).then((blog) =>
      res.send({
        success: true,
        message: "Comment added sucessfully",
        blog,
      })
    );
  }
});

handler.get(async (req, res) => {
  if (req.query._id) {
    await db.connect();
    const blogs = await Blog.findOne({
      _id: req.query._id,
    }).populate({
      path: "category",
      select: "categoryName categorySlug",
    });
    await db.disconnect();
    res.send(blogs);
  }
});


handler.use(isAdmin).delete(async (req, res) => {
  try {
    await db.connect();
    const blog = await Blog.findByIdAndDelete({ _id: req.query._id });
    if (blog) {
      await db.disconnect();
      res.status(200).json({
        success: true,
        message: "Blog deleted successfully",
      });
    } else {
      await db.disconnect();
      res.send({
        success: false,
        error: "Blog not found",
      });
    }
  } catch (error) {
    await db.disconnect();
    res.send({
      error: "Blog not found",
    });
  }
});


export default handler;
