import React from "react";

const BlogAuthor = ({}) => {
 
  return (
    <>
      <div className="card card-flush pb-3 pb-lg-0 mb-4">
        <div className="card-body">
          <div className="d-flex align-items-start">
            <img
              className="rounded-circle"
              src="img/rokye-website/Avtar.png"
              width={80}
              alt="Kristin Watson"
            />
            <div className="ps-3">
              <h3 className="h5 mb-2">Author</h3>
              <p className="fs-sm text-muted">Creator</p>
              <div className="d-flex">
                <a
                  className="btn btn-icon btn-light-primary btn-xs rounded-circle shadow-sm me-2"
                  href="#"
                >
                  <i className="fi-facebook" />
                </a>
                <a
                  className="btn btn-icon btn-light-primary btn-xs rounded-circle shadow-sm me-2"
                  href="#"
                >
                  <i className="fi-twitter" />
                </a>
                <a
                  className="btn btn-icon btn-light-primary btn-xs rounded-circle shadow-sm me-2"
                  href="#"
                >
                  <i className="fi-instagram" />
                </a>
                <a
                  className="btn btn-icon btn-light-primary btn-xs rounded-circle shadow-sm me-2"
                  href="#"
                >
                  <i className="fi-youtube" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogAuthor;
