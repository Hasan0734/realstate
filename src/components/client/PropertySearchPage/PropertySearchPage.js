import React, { useEffect, useState } from "react";
import PropertiesPagination from "./Pagination/PropertiesPagination";
import Property from "./SingleProperty/Property";
import Link from "next/link";
import { useRouter } from "next/router";
import queryString from 'query-string'
import { getData } from "../../../../__lib__/helpers/HttpService";

const PropertySearchPage = () => {
  const { query } = useRouter();
  const queryUrl = queryString.stringify(query, { sort: false });
  const [searchData, setSerachData] = useState([])
  useEffect(() => {
    if (
      Boolean(query.location) ||
      Boolean(query.bedrooms) ||
      Boolean(query.budgets)
    ) {
      getData(`/properties/s?${queryUrl}`).then((res) => {
        if (res?.length > 0) {
          setSerachData(res);
        } else {
          setSerachData([]);
        }
      });
    }
  }, [query.location, query.bedrooms, query.budgets, queryUrl]);

  const [pageNumber, setPageNumber] = useState(0);
  const propertyPerPage = 5;
  const pagesVisited = pageNumber * propertyPerPage;

  //how many pages
    const searchPage = Math.ceil(searchData?.length / propertyPerPage);
  // const sort = Math.ceil(propertySort.sortData?.length / propertyPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className="d-flex justify-content-center">
      <div className="col-lg-8 col-xl-7 position-relative overflow-hidden pb-5 pt-4 px-3 px-xl-4 px-xxl-5">
        {/* Breadcrumb*/}

        <nav className="mb-3 pt-md-2" aria-label="Breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              <Link href="/properties">
                <a>Property list</a>
              </Link>
            </li>
          </ol>
        </nav>
        {/* Title*/}
        <div className="d-sm-flex align-items-center justify-content-between pb-3 pb-sm-4">
          <h1 className="h2 mb-sm-0">Property for rent</h1>
          <a
            className="d-inline-block fw-bold text-decoration-none py-1"
            href="#"
            data-bs-toggle-class="invisible"
            data-bs-target="#map"
          />
        </div>
        {/* Sorting*/}
        {/* <PropertySorting
          filtered={filtered}
          searchFilter={searchFilter}
          properties={properties}
        /> */}

        {searchData?.length > 0 ? (
          searchData
            ?.slice(pagesVisited, pagesVisited + propertyPerPage)
            ?.map((item, i) => <Property key={item._id} property={item} />)
        ) : (
          <div>Property not found</div>
        )}

        {/* pagination here */}
        {
          <PropertiesPagination
            pageCount={searchPage}
            changePage={changePage}
          />
        }
      </div>
    </div>
  );
};

export default PropertySearchPage;
