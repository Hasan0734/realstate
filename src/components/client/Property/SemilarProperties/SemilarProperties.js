import Link from "next/link";
import { useRouter } from "next/router";
import Slider from "react-slick/lib/slider";
import slugify from "slugify";
import Item from "./Item";

const SemilarProperties = ({properties}) => {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 3,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };


  const { query } = useRouter();
  const { areaName, state, city, bedrooms, propertyType } = query;
  const bedroomsArray = bedrooms;
  const filtered = properties?.filter((val) => {
    if (
      slugify(val.areaName.toLowerCase()).includes(
        slugify(areaName.toLowerCase())
      ) ||
      slugify(val.state.toLowerCase()).includes(slugify(state.toLowerCase())) ||
      slugify(val.city.toLowerCase()).includes(slugify(city.toLowerCase())) ||
      val.bedrooms === parseInt(bedroomsArray[0]?.toLowerCase())
    ) {
      return val;
    }
  });


  return (
    <>
      <section className="container pb-5 mb-lg-4 overflow-hidden">
        <div className="d-flex align-items-center justify-content-between pb-2">
          <h2 className="h3 pt-5 pb-3 mt-md-4">Similar properties</h2>
          <Link href="/properties">
          <a
            className="btn btn-link fw-normal ms-sm-3 p-0"
          
          >
            View all
            <i className="fi-arrow-long-right ms-2" />
          </a>
          </Link>
        </div>

        {/* Item*/}
       {filtered.length > 0 ? (
         <Slider {...settings}>
         {filtered?.map((semilar, i) => (
           <Item key={i} property={semilar} />
         ))}
       </Slider>
       ): <h4>Similar property not found</h4>}
       
      </section>
    </>
  );
};

export default SemilarProperties;
