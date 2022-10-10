import { useRouter } from "next/router";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setSearch } from "../../../../../store/propertySearch/actions";
import queryString from 'query-string'



const HomeSearch = () => {
  const dispatch = useDispatch();
  const router = useRouter()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    dispatch(setSearch(data));
   
    const query = queryString.stringify(data, {sort: false})
    router.push(`/properties/s?${query}`)
  };
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={`form-group d-block ${errors.keywords && "border-danger"}`}
      >
        <div className="row g-0">
          <div className="col-md-10 d-sm-flex align-items-center">
            <div className="input-group border-end-lg border-dark">
              <span className="input-group-text text-muted ps-2 ps-sm-3">
                <i className="fi-search" />
              </span>
              <input
                {...register("location", { required: true })}
                className="form-control"
                type="text"
                name="location"
                placeholder="Enter city or locality name"
              />
            </div>
            <hr className="d-sm-none my-2" />
            <div
              className="dropdown w-sm-50 border-end-sm"
              data-bs-toggle="select"
            >
              <select
                {...register("bedrooms", { required: false })}
                className="form-select"
              >
                <option value="" selected>
                  Bedroom
                </option>
                <option value="1">1 BHK</option>
                <option value="2">2 BHK</option>
                <option value="3">3+ BHK</option>
              </select>
            </div>
            <hr className="d-sm-none my-2" />
            <div className="dropdown w-sm-50" data-bs-toggle="select">
              <select
                {...register("budgets", { required: false })}
                className="form-select"
              >
                <option value="" selected>
                  Budget
                </option>
                <option value="5000-10000">₹5000 - ₹10000</option>
                <option value="10000-15000">₹10000 - ₹15000</option>
                <option value="20000-25000">₹20000 - ₹25000</option>
                <option value="25000-30000">₹25000 - ₹30000</option>
                <option value="30000-40000">₹30000 - ₹40000</option>
                <option value="40000-50000">₹50000 - ₹50000</option>
                <option value="50000-60000">₹50000 - ₹60000</option>
                <option value="60000-70000">₹60000 - ₹70000</option>
                <option value="75000-100000">₹75000 - ₹1 Lac</option>
                <option value="100000-200000">₹1 Lac - ₹2 Lac</option>
                <option value="200000-300000">₹2 Lac - ₹3 Lac</option>
              </select>
            </div>
          </div>
          <hr className="d-md-none mt-2" />
          <div className="col-md-2 d-sm-flex align-items-center pt-3 pt-md-0">
            <button
              className="btn btn-lg btn-icon btn-primary px-3 w-100"
              type="submit"
            >
              Search
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default HomeSearch;
