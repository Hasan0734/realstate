import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBlog } from "../../../../../store/blog/actions";
import BlogComment from "./BlogComment";

const BlogComents = () => {
  const { blog } = useSelector((state) => state);
  const dispatch = useDispatch();
  const { blogData } = blog;
  const {query} = useRouter()
  useEffect(() => {
    dispatch(setBlog(query.id))
  }, [query.id]);
  return (
    <>
      <div className="mb-4 mb-md-5" id="comments">
        <h3 className="mb-4 pb-2">{blogData?.comments?.length} comments</h3>
        {/* Comment*/}
        {blogData?.comments?.map((comment, i) => (
          <BlogComment key={i} comment={comment} />
        ))}
      </div>
    </>
  );
};

export default BlogComents;
