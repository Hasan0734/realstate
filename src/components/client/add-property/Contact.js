import { useDispatch, useSelector } from "react-redux";
import { setContact } from "../../../../store/property/actions";

function Contact({ isValid }) {
  const dispatch = useDispatch();
  const { property } = useSelector((state) => state);
  const { contact } = property;
  const { email, firstName, lastName, phoneNumber } = contact;
  return (
    <div className="bg-light rounded-3 p-4 p-md-5 mb-3">
      <h2 className="h4 mb-4">
        <i className="fi-info-circle text-primary fs-4 mt-n1 me-2 pe-1" />
        Contact details
      </h2>
     {
          <div className="row">
          <div className="col-sm-6 mb-4">
            <label className="form-label" htmlFor="firstName">
              First name <span className="text-danger">*</span>
            </label>
            <input
              name="firstName"
              onChange={(e) => dispatch(setContact(e))}
              value={contact.firstName ? contact.firstName : ""}
              className="form-control"
              type="text"
              id="firstName"
              placeholder="Enter your first name"
            />
            {!firstName && isValid && (
              <div className="text-danger"> First name is required</div>
            )}
          </div>
          <div className="col-sm-6 mb-4">
            <label className="form-label" htmlFor="lastName">
              Last name <span className="text-danger">*</span>
            </label>
            <input
              name="lastName"
              onChange={(e) => dispatch(setContact(e))}
              value={contact.lastName ? contact.lastName : ""}
              className="form-control"
              type="text"
              id="lastName"
              placeholder="Enter your last name"
            />
            {!lastName && isValid && (
              <div className="text-danger">lastName is required</div>
            )}
          </div>
          <div className="col-sm-6 mb-4">
            <label className="form-label" htmlFor="ap-phone">
              Phone number <span className="text-danger">*</span>
            </label>
            <input
              name="phoneNumber"
              onChange={(e) => dispatch(setContact(e))}
              value={contact.phoneNumber ? contact.phoneNumber : ""}
              className="form-control"
              type="tel"
              id="ap-phone"
              data-format="custom"
              data-delimiter="-"
              data-blocks="3 3 4"
              placeholder="Enter your phone number"
            />
            {!phoneNumber && isValid && (
              <div className="text-danger">Phone is required</div>
            )}
          </div>
          <div className="col-sm-6 mb-4">
            <label className="form-label" htmlFor="ap-email">
              Email<span className="text-danger">*</span>
            </label>
            <input
              name="email"
              onChange={(e) => dispatch(setContact(e))}
              value={contact.email ? contact.email : ""}
              className="form-control"
              type="email"
              id="ap-email"
              placeholder="Enter your email"
            />
            {!email && isValid && (
              <div className="text-danger">Email is required</div>
            )}
          </div>
        </div>
     }
      <div className="form-check mb-6"></div>
    </div>
  );
}
export default Contact;
