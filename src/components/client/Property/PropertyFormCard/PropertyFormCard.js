import React from "react";
import ContactForm from "./ContactForm";

const PropertyFormCard = () => {
  return (
    <>
      <div className="col-md-5 pt-5 pt-md-0" style={{ marginTop: "-6rem" }}>
        <div className="sticky-top pt-5">
          <div className="d-none d-md-block pt-5"></div>
          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <div className="d-flex align-items-start justify-content-between">
                <a
                  className="text-decoration-none"
                  href="real-estate-vendor-properties.html"
                >
                  <h5 className="mb-1">Rokye Realty</h5>
                </a>
                <div className="ms-4 flex-shrink-0">
                  <a
                    className="text-decoration-none"
                    href="real-estate-vendor-properties.html"
                  />
                  <a
                    className="btn btn-icon btn-light-primary btn-xs shadow-sm rounded-circle ms-2 mb-2"
                    href="#"
                  >
                    <i className="fi-facebook" />
                  </a>
                  <a
                    className="btn btn-icon btn-light-primary btn-xs shadow-sm rounded-circle ms-2 mb-2"
                    href="#"
                  >
                    <i className="fi-twitter" />
                  </a>
                  <a
                    className="btn btn-icon btn-light-primary btn-xs shadow-sm rounded-circle ms-2 mb-2"
                    href="#"
                  >
                    <i className="fi-instagram" />
                  </a>
                  <a
                    className="btn btn-icon btn-light-primary btn-xs shadow-sm rounded-circle ms-2 mb-2"
                    href="#"
                  >
                    <i className="fi-youtube" />
                  </a>
                </div>
              </div>
              <ul className="list-unstyled border-bottom mb-4 pb-4">
                <li>
                  <a
                    className="nav-link fw-normal p-0"
                    href="mailto:floyd_miles@email.com"
                  >
                    <i className="fi-mail mt-n1 me-2 align-middle opacity-60" />
                    sales@rokye.com
                  </a>
                </li>
              </ul>
              {/* Contact form*/}
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PropertyFormCard;
