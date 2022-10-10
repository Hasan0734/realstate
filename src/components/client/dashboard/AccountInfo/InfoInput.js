import React, { useState } from "react";

const InfoInput = (props) => {
  const [showPass, setShowPass] = useState(false);
  const { propertyValue, fieldName, fieldtype, label, collapse, handleForm } =
    props;

  return (
    <>
      <div className="border-bottom pb-3 mb-3">
        <div className="d-flex align-items-center justify-content-between">
          <div className="pe-2">
            <label htmlFor={fieldName} className="form-label fw-bold">
              {label}
            </label>
            <div id={fieldName}>{propertyValue}</div>
          </div>
          <div className="me-n3" data-bs-toggle="tooltip" title="Edit">
            <a
              className="nav-link py-0"
              href={collapse}
              data-bs-toggle="collapse"
            >
              <i className="fi-edit" />
            </a>
          </div>
        </div>
        <div
          className="collapse"
          id={collapse?.slice(1, collapse?.length)}
          data-bs-parent="#personal-info"
        >
          {fieldtype !== "updatePassword" && (
            <input
              name={fieldName}
              id={fieldName}
              className="form-control mt-3"
              type={fieldtype}
              data-bs-binded-element={fieldName}
              data-bs-unset-value="Not specified"
              defaultValue={propertyValue}
              onChange={(e) => handleForm(e)}
            />
          )}

          {fieldtype === "updatePassword" && (
            <div className="password-toggle mt-3">
              <input
                name={fieldName}
                className="form-control"
                type={showPass ? "text" : "password"}
                id="pass-visibility"
                onChange={(e) => handleForm(e)}
                placeholder="Password"
              />
              <label
                className="password-toggle-btn"
                aria-label="Show/hide password"
              >
                <input
                  onClick={() => setShowPass(!showPass)}
                  className="password-toggle-check"
                  type="checkbox"
                />
                <span className="password-toggle-indicator" />
              </label>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default InfoInput;
