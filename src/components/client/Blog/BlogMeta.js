import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBlog } from "../../../../store/blog/actions";
import dateFormat from "dateformat";
const BlogMeta = () => {
  const dispatch = useDispatch();
  const { query } = useRouter();
  const { blog } = useSelector(state => state);

  useEffect(() => {
    dispatch(setBlog(query.id));
  }, [query.id]);
  return (
    <>
      <div className="d-flex flex-wrap border-bottom pb-3 mb-4">
        <a
          className="text-uppercase text-decoration-none border-end pe-3 me-3 mb-2"
          href="#"
        >
          Tips &amp; Advice
        </a>
        <div className="d-flex align-items-center border-end pe-3 me-3 mb-2">
          <i className="fi-calendar-alt opacity-70 me-2" />
          <span>{dateFormat(blog.blogData?.createdAt, 'mmm dd')}</span>
        </div>
        <div className="d-flex align-items-center border-end pe-3 me-3 mb-2">
          <i className="fi-clock opacity-70 me-2" />
          <span>10 min read</span>
        </div>
        <a
          className="nav-link-muted d-flex align-items-center mb-2"
          href="#comments"
          data-scroll
        >
          <i className="fi-chat-circle opacity-70 me-2" />
          <span>{blog.blogData?.comments?.length > 0 ? blog.blogData?.comments?.length : "No"} comments</span>
        </a>
      </div>
    </>
  );
};

export default BlogMeta;
