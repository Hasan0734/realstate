import React, { useState } from "react";
import ContactForm from "./ContactForm";
const ContactUsModal = () => {
  return (
    <>
      <div className="modal fade" id="message-modal" tabIndex={-1}>
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="fs-base modal-title">Message to Floyd Miles</h3>
              <button
                className="btn-close ms-0"
                type="button"
                data-bs-dismiss="modal"
              />
            </div>
            <ContactForm/>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUsModal;
