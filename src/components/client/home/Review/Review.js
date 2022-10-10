import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Slider from 'react-slick';
import ReviewItem from './ReviewItem';
import {setReviews} from '../../../../../store/reviews/actions'
import Link from 'next/link';

function Review({reviews}){


    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1500,
      autoplaySpeed: 4000,
    };

    return(
        <section className="container pt-lg-2 pb-5 mb-md-4" style={{marginTop: '-40px'}}>
        <div className="d-flex align-items-center justify-content-between mb-4 pb-2">
          <h2 className="h3 mt-md-4">Testimonials</h2>
          <Link href="/reviews">
          <a className="btn btn-link fw-normal ms-sm-3 p-0" >
          
            View all
            <i className="fi-arrow-long-right ms-2" /></a>
          </Link>
        </div>
        <div className="row">
          <div className="col-md-4 mb-3 mb-md-0">
            <img className="d-block mx-auto" src="img/rokye-website/reviews.svg" alt="Illustration" /></div>
          <div className="col-lg-1 d-none d-lg-block">
            <hr className="hr-vertical mx-auto" />
          </div>
          <div className="col-md-8 col-lg-7">
            <div className="tns-carousel-wrapper overflow-hidden">
              <Slider {...settings}>
              {reviews?.map((review, i) => <ReviewItem key={i} review={review}/>)}
              </Slider>
            </div>
            <div className="tns-carousel-controls justify-content-center justify-content-md-start my-2 ms-md-2" id="agents-carousel-controls">
              <button className="mx-2" type="button"><i className="fi-chevron-left" /></button>
              <button className="mx-2" type="button"><i className="fi-chevron-right" /></button>
            </div>
          </div>
        </div>
      </section>
    )
}
export default Review;