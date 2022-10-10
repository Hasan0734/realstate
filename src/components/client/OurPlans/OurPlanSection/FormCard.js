import Link from 'next/link';
import React from 'react';
import ContactForm from "../../Property/PropertyFormCard/ContactForm";

const FormCard = () => {
    return (
        <>
           <div className="col-sm-12 col-md-4 mb-4">
          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <div className="d-flex align-items-start justify-content-between">
                <a className="text-decoration-none">
                  <h5 className="mb-1">Rokye Realty</h5>
                </a>
                <div className="ms-4 flex-shrink-0">
                  <a className="text-decoration-none" />
                 <Link href="https://www.facebook.com/rokyerealty">
                 <a
                 target="_blank"
                    className="btn btn-icon btn-light-primary btn-xs shadow-sm rounded-circle ms-2 mb-2"
                   
                  >
                    <i className="fi-facebook" />
                  </a>
                 </Link>
                 <Link href="https://twitter.com/rokyerealty">
                 <a
                   target="_blank"
                    className="btn btn-icon btn-light-primary btn-xs shadow-sm rounded-circle ms-2 mb-2"
                    
                  >
                    <i className="fi-twitter" />
                  </a>
                 </Link>
                 <Link href="https://www.instagram.com/rokyerealty/">
                 <a
                 target="_blank"
                    className="btn btn-icon btn-light-primary btn-xs shadow-sm rounded-circle ms-2 mb-2"
                  >
                    <i className="fi-instagram" />
                  </a>
                 </Link>
                  <Link href="#">
                  <a
                  target="_blank"
                    className="btn btn-icon btn-light-primary btn-xs shadow-sm rounded-circle ms-2 mb-2"
                  >
                    <i className="fi-youtube" />
                  </a>
                  </Link>
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
        </>
    );
};

export default FormCard;