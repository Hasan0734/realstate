import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedCategory } from "../../../../store/propertyCategory/actions";
import { setSearch } from "../../../../store/propertySearch/actions";
import queryString from 'query-string'
const PropertySearch = () => {
  const dispatch = useDispatch();
  const { search } = useSelector((state) => state);
  const router = useRouter()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const queryUrl = queryString.stringify({location: data.location, bedrooms: '', budgets: ''}, {sort: false})
    router.push(`/properties/s?${queryUrl}`)
  
    // dispatch(setSearch(searchData));
    // dispatch(setSelectedCategory(null))
  };
  return (
    <>
      <div className="offcanvas-header d-block pt-0 pt-lg-4 px-lg-0">
        <form
          className={`form-group mb-lg-2 ${errors.location && "border-danger"}`}
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="input-group">
            <span className="input-group-text text-muted">
              <i className="fi-search" />
            </span>
            <input
              {...register("location", { required: true })}
              className="form-control"
              type="text"
              placeholder="Enter Locality"
            />
          </div>
          <button className="btn btn-primary d-lg-inline-block" type="submit">
            Search
          </button>
        </form>
      </div>
    </>
  );
};

export default PropertySearch;
