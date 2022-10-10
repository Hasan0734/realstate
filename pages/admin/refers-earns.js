import React from "react";
import { Toaster } from "react-hot-toast";
import AdminLayout from "../../src/components/admin/AdminLayout/AdminLayout";
import AllReferAndEarn from "../../src/components/admin/ReferAndEarn/AllReferAndEarn";
import { adminAuth } from "../../__lib__/helpers/requireAuthentication";

const RefersEarns = () => {
  return (
    <AdminLayout>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="content-header row">
        {/* path */}
        <div className="content-header-left col-md-9 col-12 mb-2">
          <div className="row ">
            <div className="col-12">
              <h2 className="content-header-title float-start mb-0">
                Refers and Earns
              </h2>
            </div>
          </div>
        </div>
        {/* /path */}
      </div>
      <div className="content-body">
        <AllReferAndEarn />
      </div>
    </AdminLayout>
  );
};

export default RefersEarns;
export const getServerSideProps = adminAuth((context) => {
  return {
    props: {},
  };
});
