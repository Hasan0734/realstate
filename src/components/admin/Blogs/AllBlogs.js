import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GridLoader } from "react-spinners";
import { setBlogs } from "../../../../store/blogs/actions";
import { getData } from "../../../../__lib__/helpers/HttpService";
import BlogCard from "./BlogCard";

const AllBlogs = () => {
  const dispatch = useDispatch();
  const {blogs} = useSelector(state => state)
  const {blogList} = blogs;
  useEffect(() => {
    dispatch(setBlogs())
  }, []);

  return (
    <secttion>
      <div className="row">
        {!blogs.isLoading && (blogList?.length > 0 ? (
          blogList?.map((cont, i) => <BlogCard key={i} data={cont} />)
        ) : (
          <div className="p-4">
            <div className="d-flex justify-content-center align-items-center">
              <h3>Blog not available</h3>
            </div>
          </div>
        ))}
        {blogs.isLoading &&  <div className="p-4">
            <div className="d-flex justify-content-center align-items-center">
              <GridLoader color={"#27d37f"} loading={true} size={8} />
            </div>
          </div>}
      </div>
    </secttion>
  );
};

export default AllBlogs;
