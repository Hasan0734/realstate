import React, { useState } from "react";
import PropertiesPagination from "./Pagination/PropertiesPagination";
import Property from "./SingleProperty/Property";
import PropertySorting from "./PropertySorting";
import { useSelector } from "react-redux";
import Link from "next/link";

const MainContent = ({ properties }) => {
  const { filterData, amenitiesData, propertySort } = useSelector(
    (state) => state
  );
  const [pageNumber, setPageNumber] = useState(0);
  const propertyPerPage = 5;
  const pagesVisited = pageNumber * propertyPerPage;

  const propertiesPageNumber = Math.ceil(properties.length / propertyPerPage);
  const filterPageNumber = Math.ceil(
    filterData.dataList?.length / propertyPerPage
  );
  const ameniteFilterPage = Math.ceil(
    amenitiesData.dataList?.length / propertyPerPage
  );
  const sortPage = Math.ceil(propertySort.sortData?.length / propertyPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <>
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
        <PropertySorting
          filterData={filterData.dataList}
          properties={properties}
          amenitiesData={amenitiesData.dataList}
        />

        {!filterData.dataList &&
          !amenitiesData.dataList &&
          !propertySort.sortData &&
          properties.length > 0 &&
          properties
            .slice(pagesVisited, pagesVisited + propertyPerPage)
            ?.map((item, index) => <Property key={index} property={item} />)}

        {!propertySort.sortData && filterData.dataList &&
          (filterData.dataList.length > 0 ? (
            filterData.dataList
              ?.slice(pagesVisited, pagesVisited + propertyPerPage)
              ?.map((item, i) => <Property key={i} property={item} />)
          ) : (
            <div>Property not found</div>
          ))}

        {!propertySort.sortData && amenitiesData.dataList &&
          (amenitiesData.dataList.length > 0 ? (
            amenitiesData.dataList
              ?.slice(pagesVisited, pagesVisited + propertyPerPage)
              ?.map((item, i) => <Property key={i} property={item} />)
          ) : (
            <div>Property not found</div>
          ))}
        {propertySort.sortData &&
          (propertySort.sortData.length > 0 ? (
            propertySort.sortData
              ?.slice(pagesVisited, pagesVisited + propertyPerPage)
              ?.map((item, i) => <Property key={i} property={item} />)
          ) : (
            <div>Property not found</div>
          ))}

        {/* pagination here */}

        {filterData.dataList && (
          <PropertiesPagination
            pageCount={filterPageNumber}
            changePage={changePage}
          />
        )}
        {amenitiesData.dataList && (
          <PropertiesPagination
            pageCount={ameniteFilterPage}
            changePage={changePage}
          />
        )}
        {!filterData.dataList && !amenitiesData.dataList && (
          <PropertiesPagination
            pageCount={propertiesPageNumber}
            changePage={changePage}
          />
        )}
      </div>
    </>
  );
};

export default MainContent;
