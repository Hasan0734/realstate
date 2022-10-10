import React from "react";
import { Toaster } from "react-hot-toast";
import AdminLayout from "../../src/components/admin/AdminLayout/AdminLayout";
import AllContacts from "../../src/components/admin/Contacts/AllContacts";
import { adminAuth } from "../../__lib__/helpers/requireAuthentication";

const ContactUs = () => {
  return (
    <AdminLayout>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="content-header row">
        {/* path */}
        <div className="content-header-left col-md-9 col-12 mb-2">
          <div className="row ">
            <div className="col-12">
              <h2 className="content-header-title float-start mb-0">Contacts</h2>
            </div>
          </div>
        </div>
        {/* /path */}
      </div>
      <div className="content-body">
        <AllContacts />
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