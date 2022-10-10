import Link from "next/link";
import React from "react";
import { firstNWord } from "../../../../__lib__/helpers/Validator";
import parse from "html-react-parser";
import queryString from "query-string";
import dateFormat from "dateformat";
const BlogCard2 = ({ blog }) => {
  const { title, body, _id, createdAt, postedBy, category, comments } = blog;
  const newBody = firstNWord(body, 15);
  const query = queryString.stringify({  title: title, id: _id, }, {sort: false});
  return (
    <>
      <article className="card border-0 shadow-sm card-hover card-horizontal mb-4">
        <Link href={`/blog?${query}`}>
          <a
            className="card-img-top"
            style={{ backgroundImage: `url(${blog?.image})` }}
          />
        </Link>
        <div className="card-body">
          <Link href={`/blogs/category/${category.categorySlug}`}>
            <a className="fs-xs text-uppercase text-decoration-none">
              {category.categoryName}
            </a>
          </Link>
          <h3 className="fs-base pt-1 mb-2">
            <Link href={`/blog?${query}`}>
              <a className="nav-link">{title}</a>
            </Link>
          </h3>
          <p className="fs-sm text-muted">{parse(newBody)}</p>

          <span className="d-flex align-items-center text-decoration-none">
            <img
              className="rounded-circle"
              src="img/rokye-website/Avtar.png"
              width={44}
              alt="Avatar"
            />
            <div className="ps-2">
              <h6 className="fs-sm text-nav lh-base mb-1">{postedBy?.name}</h6>
              <div className="d-flex text-body fs-xs">
                <span className="me-2 pe-1">
                  <i className="fi-calendar-alt opacity-70 me-1" />
                  {dateFormat(createdAt, "mmm dd")}
                </span>
                <span>
                  <i className="fi-chat-circle opacity-70 me-1" />
                 {comments?.length > 0 ? comments?.length :  "No" } comments
                </span>
              </div>
            </div>
          </span>
        </div>
      </article>
    </>
  );
};

export default BlogCard2;
