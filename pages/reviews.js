import { useEffect, useState } from "react";
import Layout from "../src/components/client/layout";
import AddReviewModal from "../src/components/client/Reviews/AddReviewModal/AddReviewModal";
import ReviewHeader from "../src/components/client/Reviews/ReviewHeader";
import CompanyProfile from "../src/components/client/Reviews/CompanyProfile";
import ReviewTitle from "../src/components/client/Reviews/ReviewTitle";
import ReviewStatics from "../src/components/client/Reviews/ReviewStatics/ReviewStatics";
import ShortAndReviewButton from "../src/components/client/Reviews/ShortAndReviewButton";
import ReviewPagination from "../src/components/client/Reviews/ReviewPagination/ReviewPagination";
import ReviewCard from "../src/components/client/Reviews/ReviewCard";
import { userAuth } from "../__lib__/helpers/requireAuthentication";
import { useDispatch, useSelector } from "react-redux";
import { setReviews } from "../store/reviews/actions";
import ContactUsModal from "../src/components/client/Reviews/ContactUsModal/ContactUsModal";
const Reviews = () => {
  const [sortReviews, setSortReviews] = useState(null)

  const dispatch = useDispatch();
  const {reviews} = useSelector(state => state)
  const {reviewList} = reviews;



  useEffect(() => {
    dispatch(setReviews())
  },[])

  const [pageNumber, setPageNumber] = useState(0);
  const propertyPerPage = 5;
  const pagesVisited = pageNumber * propertyPerPage;

  //how many pages
    const reviewPage = Math.ceil(reviewList?.length / propertyPerPage);
  // const sort = Math.ceil(propertySort.sortData?.length / propertyPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <Layout>
      <div>
        {/* contact use modal  */}
        <ContactUsModal />
        {/* add review modal */}
        <AddReviewModal />
        <div className="container mt-5 mb-md-4 py-5">
          {/* navbar  */}
          <ReviewHeader />
          <div className="row">
            {/* Company profile */}
            <CompanyProfile />

            {/* Content*/}
            <div className="col-lg-9 col-md-8">
              <ReviewTitle />
              {/* Reviews statistics*/}
              <ReviewStatics />

              {/* Sorting + add review button*/}
              <ShortAndReviewButton
              setSortReviews={setSortReviews}
              reviews={reviewList}/>
              {/* Review*/}
            {!sortReviews && reviewList?.slice(pagesVisited, pagesVisited + propertyPerPage)?.map((review, i) =>   <ReviewCard key={i} review={review} />)}
            {sortReviews && sortReviews?.slice(pagesVisited, pagesVisited + propertyPerPage)?.map((review, i) =>   <ReviewCard key={i} review={review} />)}

              {/* Pagination*/}
              <ReviewPagination 
               pageCount={reviewPage}
               changePage={changePage}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Reviews;
export const getServerSideProps =  userAuth((context) => {
  return {
    props: {
    
    },
  };
});

