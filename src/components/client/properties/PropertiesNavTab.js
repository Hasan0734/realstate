import { useRouter } from "next/router";
import React from "react";
import { useDispatch } from "react-redux";
import { setPremiumSelected } from "../../../../store/premiumSelect/actions";
import { setSelectedCategory } from "../../../../store/propertyCategory/actions";
import { setSearch } from "../../../../store/propertySearch/actions";
import { setSortProperty } from "../../../../store/propertySort/actions";

const PropertiesNavTab = ({setFilterTab}) => {
  const dispatch = useDispatch()
  const router = useRouter();
  return (
    <>
      <div className="offcanvas-header d-block py-lg-0 py-0 px-lg-0">
        <ul className="nav nav-pills" role="tablist">
          <li className="nav-item">
            <a
            onClick={() => {
              // dispatch(setPremiumSelected(null));

              setFilterTab('filter')}}
              className="nav-link d-flex align-items-center active"
              href="#categories"
              data-bs-toggle="tab"
              role="tab"
            >
              <i className="fi-list me-2" />
              Filters
            </a>
          </li>
          {/* <li className="nav-item">
            <button
              onClick={() => {
                // location.reload()
                dispatch(setSearch(null))
                dispatch(setSelectedCategory(null))
                dispatch(setSortProperty(null))
              }}
              className="nav-link d-flex align-items-center"
            >
              All
            </button>
          </li> */}
          <li className="nav-item">
            <a
            onClick={()=>{
              // dispatch(setSelectedCategory(null));
              setFilterTab('premium')}}
              className="nav-link d-flex align-items-center"
              href="#filters"
              data-bs-toggle="tab"
              role="tab"
            >
              <i className="fi-filter-alt-horizontal me-2" />
              Premium Filters
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default PropertiesNavTab;
