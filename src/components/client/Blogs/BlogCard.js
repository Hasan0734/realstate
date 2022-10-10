import Link from "next/link";
import React from "react";
import {firstNWord} from '../../../../__lib__/helpers/Validator'
import parse from 'html-react-parser'
import queryString from 'query-string'
import dateFormat from "dateformat";

const BlogCard = ({blog}) => {

  const {title, body, _id, postedBy, createdAt, category, comments} = blog;
  const newBody = firstNWord(body, 15)
  const query  = queryString.stringify({title: title, id: _id}, {sort: false})
  return (
    <>
      <article className="col-sm-6 mb-4">
        <div className="card card-hover border-0 shadow-sm h-100">
          <Link href={`/blog?${query}`}>
            <a className="card-img-top overflow-hidden position-relative">
              <span className="badge bg-faded-info position-absolute top-0 end-0 fs-sm rounded-pill m-3">
                New
              </span>
              <img
                style={{height: '250px', width: '100%'}}
                className="d-block"
                src={blog?.image}
                alt="Image"
              />
            </a>
          </Link>
          <div className="card-body pb-3">
          <Link href={`/blogs/category/${category.categorySlug}`}>
            <a className="fs-xs text-uppercase text-decoration-none">
              {category.categoryName}
            </a>
          </Link>
            <h3 className="fs-base pt-1 mb-2">
            <Link href={`/blog/?${query}`}>
                <a className="nav-link" >
                 {title}
                </a>
              </Link>
            </h3>
            <p className="fs-sm text-muted m-0">
             {parse(newBody)}
            </p>
          </div>
          <sapn
            className="card-footer d-flex align-items-center text-decoration-none border-top-0 pt-0 mb-1"
           
          >
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
                  {dateFormat(createdAt, 'mmm dd')}
                </span>
                <span>
                  <i className="fi-chat-circle opacity-70 me-1" />
                  {comments?.length > 0 ? comments?.length :  "No" } comments
                </span>
              </div>
            </div>
          </sapn>
        </div>
      </article>
    </>
  );
};

export default BlogCard;
