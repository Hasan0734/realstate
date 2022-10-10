import React from "react";

const BlogComReply = () => {
  return (
    <>
      <div className="border-start border-4 ps-4 ms-4 mt-4">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation.
        </p>
        <div className="d-flex align-items-center pe-2">
          <img
            className="rounded-circle me-1"
            src="img/rokye-website/Avtar.png"
            width={48}
            alt="Avatar"
          />
          <div className="ps-2">
            <h6 className="fs-base mb-0">
              Kristin Watsons
              <span className="badge bg-info rounded-pill fs-xs ms-2">
                Author
              </span>
            </h6>
            <span className="text-muted fs-sm">2 days ago</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogComReply;
