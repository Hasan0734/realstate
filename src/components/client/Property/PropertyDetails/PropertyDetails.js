import React from "react";

const PropertyDetails = ({ property }) => {
  const {
    monthlyRent,
    securityAmount,
    maintenanceCharges,
    propertyType,
    bedrooms,
    bathrooms,
    balconies,
    furnishedStatus,
    carParking,
    availability,
    ageConstruction,
    carpetArea,
    superArea,
    floorNo,
    totalFloors,
    tenantsPreferred,
    facing,
    vegPermission,
    petsPermission,
  } = property;
  return (
    <>
      <div className="pb-4 mb-3">
        <h2 className="h4 text-dark pt-4 mt-3">Property details</h2>
        <div className="border rounded-3 p-3 mb-4" id="personal-info">
          <div className="border-bottom mb-3">
            <ul className="list-unstyled row row-cols-lg-3 row-cols-md-2 row-cols-1 gy-1 mb-1 text-nowrap">
              <li className="col fw-bold">
                <i className="fi-accounting mt-n1 me-2 fs-lg align-middle" />
                Rent
              </li>
              <li className="col fw-bold">
                <i className="fi-credit-card mt-n1 me-2 fs-lg align-middle" />
                Deposit
              </li>
              <li className="col fw-bold">
                <i className="fi-cash mt-n1 me-2 fs-lg align-middle" />
                Maintenance
              </li>
              <li className="col">
                <i className="mt-n1 me-2 fs-lg align-middle" />₹ {monthlyRent}
              </li>
              <li className="col">
                <i className="t-n1 me-2 fs-lg align-middle" />₹ {securityAmount}
              </li>
              <li className="col">
                <i className="mt-n1 me-2 fs-lg align-middle" />₹{" "}
                {maintenanceCharges} quarterly
              </li>
            </ul>
          </div>
          <div className="border-bottom mb-3">
            <ul className="list-unstyled row row-cols-lg-3 row-cols-md-2 row-cols-1 gy-1 mb-1 text-nowrap">
              <li className="col fw-bold">
                <i className="fi-home mt-n1 me-2 fs-lg align-middle" />
                Property type
              </li>
              <li className="col fw-bold">
                <i className="fi-bath mt-n1 me-2 fs-lg align-middle" />
                Bathrooms
              </li>
              <li className="col fw-bold">
                <i className="fi-sidebar-left mt-n1 me-2 fs-lg align-middle" />
                Balconies
              </li>
              <li className="col">
                <i className="mt-n1 me-2 fs-lg align-middle" />
                {bedrooms} BHK {propertyType}
              </li>
              <li className="col">
                <i className="t-n1 me-2 fs-lg align-middle" />
                {bathrooms} bath
              </li>
              <li className="col">
                <i className="mt-n1 me-2 fs-lg align-middle" />
                {balconies} balconies
              </li>
            </ul>
          </div>
          <div className="border-bottom mb-3">
            <ul className="list-unstyled row row-cols-lg-3 row-cols-md-2 row-cols-1 gy-1 mb-1 text-nowrap">
              <li className="col fw-bold">
                <i className="fi-double-bed mt-n1 me-2 fs-lg align-middle" />
                Furnished Status
              </li>
              <li className="col fw-bold">
                <i className="fi-parking mt-n1 me-2 fs-lg align-middle" />
                Parking places
              </li>
              <li className="col fw-bold">
                <i className="fi-rent mt-n1 me-2 fs-lg align-middle" />
                Availability
              </li>
              <li className="col">
                <i className="mt-n1 me-2 fs-lg align-middle" />
                {furnishedStatus}
              </li>
              <li className="col">
                <i className="mt-n1 me-2 fs-lg align-middle" />
                {carParking} cars
              </li>
              <li className="col">
                <i className="mt-n1 me-2 fs-lg align-middle" />
                {availability}
              </li>
            </ul>
          </div>
          <div className="border-bottom mb-3">
            <ul className="list-unstyled row row-cols-lg-3 row-cols-md-2 row-cols-1 gy-1 mb-1 text-nowrap">
              <li className="col fw-bold">
                <i className="fi-building mt-n1 me-2 fs-lg align-middle" />
                Property Age
              </li>
              <li className="col fw-bold">
                <i className="fi-info-circle mt-n1 me-2 fs-lg align-middle" />
                Carpet area
              </li>
              <li className="col fw-bold">
                <i className="fi-search mt-n1 me-2 fs-lg align-middle" />
                Super area
              </li>
              <li className="col">
                <i className="mt-n1 me-2 fs-lg align-middle" />
                {ageConstruction}
              </li>
              <li className="col">
                <i className="mt-n1 me-2 fs-lg align-middle" />
                {carpetArea} sq.ft
              </li>
              <li className="col">
                <i className="mt-n1 me-2 fs-lg align-middle" />
                {superArea} sq.ft
              </li>
            </ul>
          </div>
          <div className="border-bottom mb-3">
            <ul className="list-unstyled row row-cols-lg-3 row-cols-md-2 row-cols-1 gy-1 mb-1 text-nowrap">
              <li className="col fw-bold">
                <i className="fi-help mt-n1 me-2 fs-lg align-middle" />
                Floor no
              </li>
              <li className="col fw-bold">
                <i className="fi-apartment mt-n1 me-2 fs-lg align-middle" />
                Total floors
              </li>
              <li className="col fw-bold">
                <i className="fi-users mt-n1 me-2 fs-lg align-middle" />
                Tenant preferred
              </li>
              <li className="col">
                <i className="mt-n1 me-2 fs-lg align-middle" />
                {floorNo}
              </li>
              <li className="col">
                <i className="mt-n1 me-2 fs-lg align-middle" />
                {totalFloors} floors
              </li>
              <li className="col">
                <i className="mt-n1 me-2 fs-lg align-middle" />
                {tenantsPreferred}
              </li>
            </ul>
          </div>
          <ul className="list-unstyled row row-cols-lg-3 row-cols-md-2 row-cols-1 gy-1 mb-1 text-nowrap">
            <li className="col fw-bold">
              <i className="fi-geo mt-n1 me-2 fs-lg align-middle" />
              Facing
            </li>
            <li className="col fw-bold">
              <i className="fi-hotel-bell mt-n1 me-2 fs-lg align-middle" />
              Non-veg
            </li>
            <li className="col fw-bold">
              <i className="fi-pet mt-n1 me-2 fs-lg align-middle" />
              Pets
            </li>
            <li className="col">
              <i className="mt-n1 me-2 fs-lg align-middle" />
              {facing}
            </li>
            <li className="col">
              <i className="mt-n1 me-2 fs-lg align-middle" />
              {vegPermission === "0" ? "Allowed" : "Not allowed"}
            </li>
            <li className="col">
              <i className="mt-n1 me-2 fs-lg align-middle" />
              {petsPermission === "0" ? "Allowed" : "Not allowed"}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default PropertyDetails;
