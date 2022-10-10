function About() {
  return (
    <section className="container mb-2 mb-xl-5 pb-lg-4">
      <h3>Why choose us?</h3>
      <div className="row tns-carousel-wrapper tns-nav-outside">
        <div className="col-md-4">
          <div className="card border-0">
            <div className="card-body">
              <span>
                <img
                  className=""
                  src="icon/icon-2.jpeg"
                  alt="icon"
                  style={{ width:"45px", marginBottom: "16px" }}
                />
              </span>
              <h3 className="h5 card-title mb-2">No Brokerage</h3>
              <p className="card-text fs-sm">
                Let us connect home owners and tenants directly to save time and
                thousands in a brokerage.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card border-0">
            <div className="card-body">
              <span>
                <img
                  className=""
                  src="icon/icon-3.jpeg"
                  alt="icon"
                  style={{ width:"45px", marginBottom: "16px" }}
                />
              </span>
              <h3 className="h5 card-title mb-2">No Advance Payment</h3>
              <p className="card-text fs-sm">
                Avail our no advance payment service - use our service first and
                pay us later.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card border-0">
            <div className="card-body">
            <span>
                <img
                  className=""
                  src="icon/icon-1.jpeg"
                  alt="icon"
                  style={{ width:"45px", marginBottom: "16px" }}
                />
              </span>
              <h3 className="h5 card-title mb-2">Rental Agreement</h3>
              <p className="card-text fs-sm">
                We will assist you in creating rental agreement as well to make
                it hassle free and easy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;
