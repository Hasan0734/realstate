import React, { useState, useEffect } from "react";
import CategoryTable from "../../src/components/admin/Categories/CategoryTable";
import AdminLayout from "./../../src/components/admin/AdminLayout/AdminLayout";
import { postData } from "../../__lib__/helpers/HttpService";
import { getData } from "../../__lib__/helpers/HttpService";
import { useForm } from "react-hook-form";
import { adminAuth } from "../../__lib__/helpers/requireAuthentication";
import { Toaster } from "react-hot-toast";

const Categories = (props) => {

  return (
    <AdminLayout>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="content-header row">

        <div className="content-header-left col-md-9 col-12 mb-2">
          <div className="row ">
            <div className="col-12">
              <h2 className="content-header-title float-start mb-0">
                Categories
              </h2>
            </div>
          </div>
        </div> 
       
      </div>
      <div className="content-body">
       <CategoryTable/>
      </div>
    </AdminLayout>
  );
};

export default Categories;
export const getServerSideProps = adminAuth((context) => {
  return {
    props: {},
  };
});
