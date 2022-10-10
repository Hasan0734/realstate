import React from "react";

const BlogTags = ({tags, setSelectedTag}) => {

  return (
    <>
      <div className="card card-flush pb-2 pb-lg-0 mb-4">
        <div className="card-body">
          <h4 className="h5">Popular Tags</h4>
          <div className="d-flex flex-wrap mb-n1">
            {tags?.map((tag, i) => <button onClick={() => setSelectedTag(tag.tagName)} key={i} className="btn btn-xs btn-outline-secondary rounded-pill fs-sm fw-normal me-2 mb-2">
              {tag.tagName}
            </button>)}
            
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogTags;
