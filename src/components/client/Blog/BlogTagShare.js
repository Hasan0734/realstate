import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const BlogTagSharre = ({ tags }) => {

  return (
    <>
      <div className="pt-4 pb-5 mb-md-3">
        <div className="d-md-flex align-items-center justify-content-between border-top pt-4">
          <div className="d-flex align-items-center me-3 mb-3 mb-md-0">
            <div className="d-none d-sm-block fw-bold text-nowrap mb-2 me-2 pe-1">
              Tags:
            </div>
            <div className="d-flex flex-wrap">
              {tags?.map((tag, i) => (
                <Link  key={i} href="#">
                  <a
                   
                    className="btn btn-xs btn-outline-secondary rounded-pill fs-sm fw-normal me-2 mb-2"
                    href="#"
                  >
                    {tag}
                  </a>
                </Link>
              ))}
            </div>
          </div>
          <div className="d-flex align-items-center">
            <div className="fw-bold text-nowrap pe-1 mb-2">Share:</div>
            <div className="d-flex">
              <a
                className="btn btn-icon btn-light-primary btn-xs rounded-circle shadow-sm mb-2 ms-2"
                href="#"
                data-bs-toggle="tooltip"
                title="Share with Facebook"
              >
                <i className="fi-facebook" />
              </a>
              <a
                className="btn btn-icon btn-light-primary btn-xs rounded-circle shadow-sm mb-2 ms-2"
                href="#"
                data-bs-toggle="tooltip"
                title="Share with Twitter"
              >
                <i className="fi-twitter" />
              </a>
              <a
                className="btn btn-icon btn-light-primary btn-xs rounded-circle shadow-sm mb-2 ms-2"
                href="#"
                data-bs-toggle="tooltip"
                title="Share with LinkedIn"
              >
                <i className="fi-instagram" />
              </a>
              <a
                className="btn btn-icon btn-light-primary btn-xs rounded-circle shadow-sm mb-2 ms-2"
                href="#"
                data-bs-toggle="tooltip"
                title="Share with LinkedIn"
              >
                <i className="fi-youtube" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogTagSharre;
