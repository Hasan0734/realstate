import React from "react";

const BlogFeturedPosts = () => {
  return (
    <>
      <div className="card card-flush pb-3 pb-lg-0 mb-4">
        <div className="card-body">
          <h4 className="h5">Editor&apos;s Choice</h4>
          <div className="tns-carousel-wrapper mx-n3">
            <article className="px-3 pb-4">
              <div className="card border-0 shadow-sm">
                <a
                  className="card-img-top overflow-hidden"
                  href="job-board-blog-single.html"
                >
                  <img
                    className="d-block"
                    src="img/rokye-website/blog/12.jpg"
                    alt="Image"
                  />
                </a>
                <div className="card-body pb-3">
                  <a
                    className="fs-xs text-uppercase text-decoration-none"
                    href="#"
                  >
                    Guides
                  </a>
                  <h3 className="fs-base pt-1 mb-0">
                    <a className="nav-link" href="job-board-blog-single.html">
                      How to Win Your First Job In Tech
                    </a>
                  </h3>
                </div>
                <a
                  className="card-footer d-flex align-items-center text-decoration-none border-top-0 pt-0 mb-1"
                  href="#"
                >
                  <img
                    className="rounded-circle"
                    src="img/rokye-website/Avtar.png"
                    width={44}
                    alt="Avatar"
                  />
                  <div className="ps-2">
                    <h6 className="fs-sm text-nav lh-base mb-1">
                      Annette Black
                    </h6>
                    <div className="d-flex text-body fs-xs">
                      <span className="me-2 pe-1">
                        <i className="fi-calendar-alt opacity-70 me-1" />
                        May 18
                      </span>
                      <span>
                        <i className="fi-chat-circle opacity-70 me-1" />3
                        comments
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            </article>
          </div>
          <div
            className="tns-carousel-controls justify-content-center mt-n2"
            id="externalControls"
          >
            <button className="me-3" type="button">
              <i className="fi-chevron-left fs-xs" />
            </button>
            <button type="button">
              <i className="fi-chevron-right fs-xs" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogFeturedPosts;
