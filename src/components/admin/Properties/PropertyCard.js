import dateFormat from "dateformat";
import { useState } from "react";
import { CheckSquare, ChevronDown, ChevronUp, MapPin } from "react-feather";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import Cookies from "universal-cookie";
import { setProperties } from "../../../../store/properties/actions";
import { removeData } from "../../../../__lib__/helpers/HttpService";

const ContactsCard = ({ data, index }) => {
  const cookies = new Cookies();
  const [collapse, setCollapse] = useState(false)
  const [disable, setDisable] = useState(false)
  const dispatch = useDispatch()
  const {
    _id,
    bedrooms,
    city,
    state,
    areaName,
    propertyType,
    maintenanceCharges,
    bathrooms,
    balconies,
    furnishedStatus,
    carParking,
    availability,
    ageConstruction,
    description,
    facing,
    floorNo,
    houseNumber,
    basis,
    bikeParking,
    carpetArea,
    pinCode,
    propertyCategory,
    societyName,
    superArea,
    tenantsPreferred,
    totalFloors,
    vegPermission,
    monthlyRent,
    securityAmount,
    petPermission,
  } = data;

const hanndleRemove = async (id) => {
  const admin = cookies.get('_admin')
  const isTrue = confirm('Are you sure?')
  if (isTrue) {
    setDisable(true);
    removeData(`/property/${id}`, admin.token)
    .then(res => {
      if (res.success) {
        dispatch(setProperties())
        toast.success(res.message);
        setDisable(false);
      }else{
        toast.error(res.message)
        setDisable(false);
      }
    })
  }
}

  return (
    <div className="col-12">
      <div className="card mb-4">
        <div className="card-body">
          <div className="mb-1">
            <div className="d-flex justify-content-between">
              <div>
                <h5 className="text-success py-1 mb-0">#{_id}</h5>
                <h5 className="text-primary py-1 mb-0">
                  {bedrooms} Bed {propertyType} | {superArea} sq.ft
                </h5>
                <span className="text-capitalize">
                <MapPin size={13}/>  {areaName} {city} <span className="text-lowercase">in</span>{" "}
                  {state}
                </span>
              </div>
              <div>
                <h6 className="text-warning py-1">
                  {dateFormat(data.createdAt, "mmm d, yyyy")}
                </h6>
                <button
                  onClick={() => hanndleRemove(_id)}
                  className="btn btn-danger"
                  disabled={disable}
                >
                  Remove
                </button>
              </div>
            </div>
            <div id="heading-1" className="text-end mt-4">
              <button
              onClick={() => setCollapse(!collapse)}
                data-bs-toggle="collapse"
                data-bs-target={`#collapse-${index + 1}`}
                aria-expanded='true'
                aria-controls={`collapse-${index + 1}`}
                className="btn"
              >
                {collapse ? <ChevronUp /> : <ChevronDown />}
              </button>
            </div>
            <div
              className="accordion-collapse collapse"
              id={`collapse-${index + 1}`}
              aria-labelledby="heading-2"
            >
              <div className="my-4">
                <h4>Images</h4>
                <ul className="tns-thumbnails" id="thumbnails">
               {data.images?.map((img ,i ) =>  <li key={i} className="tns-thumbnail">
                    <img
                      style={{ height: "120px" }}
                      src={img}
                      alt="Thumbnail"
                    />
                  </li>)}
                </ul>
              </div>
              <div className="my-4">
                <h4>Description</h4>
                <div>
                  <p className="card-text">{description}</p>
                </div>
              </div>
              <div className="row my-4">
                <h4 className="mb-0">Property Details</h4>
                <div className="col-12 col-sm-6 col-md-3">
                  <ul className="list-unstyled mt-4">
                    <li>Rent: ₹ {monthlyRent}</li>
                    <li>Deposit: ₹ {securityAmount}</li>
                    <li>Maintennance: ₹ {maintenanceCharges}</li>
                    <li>Property Type: {propertyType}</li>
                    <li>Bathrooms: {bathrooms} bath</li>
                    <li>Balconies: {balconies} bath</li>
                  </ul>
                </div>
                <div className="col-12 col-sm-6 col-md-3">
                  <ul className="list-unstyled mt-4">
                    <li>Furnished Status: {furnishedStatus}</li>
                    <li>
                      Parking places: {carParking} cars, {bikeParking} bikes
                    </li>
                    <li>Availability: {availability}</li>
                    <li>Property Age: {ageConstruction}</li>
                    <li>Carpet area: {carpetArea} sq.ft</li>
                    <li>Super area: {superArea} sq.ft</li>
                  </ul>
                </div>
                <div className="col-12 col-sm-6 col-md-3">
                  <ul className="list-unstyled mt-4">
                    <li>Floor No: {floorNo} floor</li>
                    <li>Total Floors: {totalFloors} floors</li>
                    <li>Tenant preferred: {tenantsPreferred}</li>
                    <li>Facing: {facing}</li>
                    <li>
                      Non-veg:{" "}
                      {vegPermission === "1" ? "Allowed" : "Not allowed"}{" "}
                    </li>
                    <li>
                      Pets: {petPermission === "1" ? "Allowed" : "Not allowed"}{" "}
                    </li>
                  </ul>
                </div>
                <div className="col-12 col-sm-6 col-md-3">
                  <ul className="list-unstyled mt-4">
                    <li>houseNumber: {houseNumber} </li>
                    <li>Basis: {basis}</li>
                    <li>Pin code: {pinCode}</li>
                    <li>Society name: {societyName}</li>
                    <li>Property Category: {propertyCategory}</li>
                  </ul>
                </div>
              </div>
              <div className="">
                <h4>Amenities</h4>
                <ul className="list-unstyled row row-cols-lg-3 row-cols-md-2 row-cols-1 gy-1 mb-1 text-nowrap">
                  {data.amenities?.map((amenitie, i) => <li key={i} className="col d-flex align-items-center my-2">
                      <CheckSquare className="me-1"/>
                      {amenitie}
                  </li>)}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactsCard;
