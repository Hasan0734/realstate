import React from "react";
import AdminLayout from "../../src/components/admin/AdminLayout/AdminLayout";
import AllContacts from "../../src/components/admin/Contacts/AllContacts";
import AllReviews from "../../src/components/admin/Reviews/AllReviews";
import { adminAuth } from "../../__lib__/helpers/requireAuthentication";

const ContactUs = () => {
  return (
    <AdminLayout>
      <div className="content-header row">
        {/* path */}
        <div className="content-header-left col-md-9 col-12 mb-2">
          <div className="row ">
            <div className="col-12">
              <h2 className="content-header-title float-start mb-0">Reviews</h2>
            </div>
          </div>
        </div>
        {/* /path */}
      </div>
      <div className="content-body">
        <AllReviews/>

      </div>
    </AdminLayout>
  );
};

export default ContactUs;

export const getServerSideProps = adminAuth((context) => {
    return {
      props: {},
    };
  });