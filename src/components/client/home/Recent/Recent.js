import Link from "next/link";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import { getData } from "../../../../../__lib__/helpers/HttpService";
import Card from "../../Card/Card";
import RecentItem from "./RecentItem";
import { settings } from "./SlickSetting";

function Recent({ properties }) {
  return (
    <section className="container pb-5 mb-lg-4 pt-5 overflow-hidden">
      <div className="d-flex align-items-center justify-content-between pb-2">
        <h2 className="h3 mt-md-4">Recently added</h2>
        <Link href='/properties'>
        <a className="btn btn-link fw-normal ms-sm-3 p-0">
          View all
          <i className="fi-arrow-long-right ms-2" />
        </a>
        </Link>
      </div>

      <Slider {...settings}>
        {properties?.map((recent, i) =>  <RecentItem  key={i} recent={recent} />  )}
      </Slider>
    </section>
  );
}
export default Recent;
