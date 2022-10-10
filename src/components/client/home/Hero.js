import HomeSearch from "./Search/HomeSearch";


function Hero({ children }) {


  return (
    <section className="jarallax bg-dark zindex-1 py-xxl-5" data-jarallax data-speed="0.5"><span className="img-overlay bg-transparent opacity-50" style={{backgroundImage: 'linear-gradient(0deg, rgba(31, 27, 45, .7), rgba(31, 27, 45, .7))'}} />
        <div className="jarallax-img" style={{backgroundImage: 'url(img/rokye-website/a2.png)'}} />
        <div className="content-overlay container py-md-5">
          <div className="mt-5 mb-md-5 py-5">
            <div className="col-xl-7 col-lg-8 col-md-10 mx-auto mb-sm-5 mb-4 px-0 text-center">
              <h1 className="display-5 text-light mt-sm-5 my-4">New way of renting a home</h1>
              <p className="fs-lg text-white">No brokerage, No advance payment and all the listings are physically verified.</p>
            </div>
            <div className="col-xl-8 col-lg-9 col-md-10 mx-auto px-0">
              {/* Form group*/}
             <HomeSearch/>
            </div>
          </div>
        </div>
      </section>
  );
}
export default Hero

