import React, { useState } from "react";
import { Toaster } from "react-hot-toast";
import AdminLayout from "../../src/components/admin/AdminLayout/AdminLayout";
import AddBlogModal from "../../src/components/admin/Blogs/AddBlogModal";
import AllBlogs from "../../src/components/admin/Blogs/AllBlogs";
import { adminAuth } from "../../__lib__/helpers/requireAuthentication";

const Blogs = () => {

  const [trigger, setTrigger] = useState(false)


  return (
    <AdminLayout>
       <Toaster position="top-center" reverseOrder={false} />
       {trigger && <AddBlogModal trigger={trigger} setTrigger={setTrigger}/>}
      <div className="content-header row">
        {/* path */}
        <div className="content-header-left col-12 mb-2">
          <div className="row ">
            <div className="col-12">
              <div className="d-flex justify-content-between  me-3">
              <h2 className="content-header-title float-start mb-0">Blogs</h2>
              <button
                onClick={() => setTrigger(true)}
              className="btn btn-danger">Add Blog</button>
              </div>
            </div>
          </div>
        </div>
        {/* /path */}
      </div>
      <div className="content-body">
        <AllBlogs/>
      </div>
    </AdminLayout>
  );
};

export default Blogs;

export const getServerSideProps = adminAuth((context) => {
    return {
      props: {},
    };
  });