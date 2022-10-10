import React from "react";
import AdminLayout from "../../src/components/admin/AdminLayout/AdminLayout";
import { adminAuth } from "../../__lib__/helpers/requireAuthentication";
import { Toaster } from "react-hot-toast";
import UsersTable from "../../src/components/admin/Users/UsersTable";

const Users = () => {

  return (
    <AdminLayout>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="content-header row">

        <div className="content-header-left col-md-9 col-12 mb-2">
          <div className="row ">
            <div className="col-12">
              <h2 className="content-header-title float-start mb-0">
                Users
              </h2>
            </div>
          </div>
        </div> 
      </div>
      <div className="content-body">
       <UsersTable/>
      </div>
    </AdminLayout>
  );
};

export default Users;
export const getServerSideProps = adminAuth((context) => {
  return {
    props: {},
  };
});
