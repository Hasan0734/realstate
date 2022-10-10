import React, { useEffect, useState } from "react";
import { getData } from "../../../../../__lib__/helpers/HttpService";
import RecentBlog from "./RecentBlog";

const RecentBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    getData('/blogs')
    .then(res => setBlogs(res))
  },[])

  const recentBlog = blogs?.slice(blogs?.length - 3, blogs?.length);
  const recentReverse = recentBlog?.reverse();

  return (
    <>
      <div className="card card-flush pb-3 pb-lg-0 mb-4">
        <div className="card-body">
          <h3 className="h5">Recent Posts</h3>
          {recentReverse?.map((blog, i) => <RecentBlog key={i} blog={blog} />)}
        </div>
      </div>
    </>
  );
};

export default RecentBlogs;
