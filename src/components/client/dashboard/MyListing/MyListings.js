import React, { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import { getUserData } from "../../../../../__lib__/helpers/HttpService";
import Card from "../../Card/Card";
import MyListingShort from "./MyListingShort";
import Pagination from "./Pagination/Pagination";

const MyListings = () => {
  const [lists, setLists] = useState([]);
  const cookies = new Cookies();
  const userInfo = cookies.get("_info");
  useEffect(() => {
    getUserData("/user/properties", userInfo.token).then((res) =>
      setLists(res)
    );
  }, []);

  const [pageNumber, setPageNumber] = useState(0);
  const blogPerPage = 6;
  const pagesVisited = pageNumber * blogPerPage;

  const totalPage = Math.ceil(lists?.length / blogPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <>
      <div className="tab-pane fade" id="mylistings" role="tabpanel">
        {/* short */}
        <MyListingShort />

        {/* Favorites grid*/}
        <div className="row row-cols-lg-3 row-cols-sm-2 row-cols-1 gy-4 gx-3 gx-lg-4">
          {/* Item*/}
          {lists.length > 0 ? (
            lists
              ?.slice(pagesVisited, pagesVisited + blogPerPage)
              ?.map((item, i) => <Card type={"myLists"} key={i} item={item} />)
          ) : (
            <a
              className="d-inline-block py-sm-2 fw-bold text-decoration-none"
              href="#"
            >
              <i className="fi-refresh me-2 align-middle" />
              Load more
            </a>
          )}
        </div>
        <div className="d-flex justify-content-center mt-4">
          <Pagination pageCount={totalPage} changePage={changePage} />
        </div>
      </div>
    </>
  );
};

export default MyListings;
