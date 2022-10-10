import React from "react";
import Slider from "react-slick/lib/slider";
import SliderItem from "./SliderItem";

const PropertyGalary = ({ property }) => {
  const settings = {
    customPaging: function (i) {
      return (
        <li className="tns-thumbnail w-100">
          <img
            style={{ height: "95px", width: "140px" }}
            src={property.images[i]}
          />
        </li>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: "tns-thumbnails d-flex ",
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 4000,
  };
  return (
    <>
      <div className="tns-carousel-wrapper">
        <div className="tns-slides-count text-dark">
          {/* <i className="fi-image fs-lg me-2" />
                <div className="ps-1">
                  <span className="tns-current-slide fs-5 fw-bold" />
                  <span className="fs-5 fw-bold">/</span>
                  <span className="tns-total-slides fs-5 fw-bold" />
                </div> */}
        </div>
        <Slider {...settings}>
          {property.images?.map((image, i) => (
            <SliderItem image={image} key={i} />
          ))}
        </Slider>
      </div>
      {property.images?.length === 1 && (
        <ul className="tns-thumbnails" id="thumbnails">
          <li className="tns-thumbnail">
            <img
              style={{ height: "95px", width: "140px" }}
              src={property.images}
              alt="Thumbnail"
            />
          </li>
        </ul>
      )}
    </>
  );
};

export default PropertyGalary;
