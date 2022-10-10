import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "universal-cookie";
import Contact from "../src/components/client/add-property/Contact";
import Details from "../src/components/client/add-property/Details";
import Info from "../src/components/client/add-property/Info";
import Location from "../src/components/client/add-property/Location";
import Media from "../src/components/client/add-property/Media";
import Layout from "../src/components/client/layout";
import {
  backwordStep,
  forwordStep,
  setRemoveMedia,
  submitData,
} from "../store/property/actions";
import { FillData, propertyFields } from "../__lib__/config/index";
import { authPost, postData } from "../__lib__/helpers/HttpService";
import { userAuth } from "../__lib__/helpers/requireAuthentication";
import ClipLoader from "react-spinners/ClipLoader";
function AddProperty() {
  const cookies = new Cookies();
  const [disable, setDisable] = useState(false);
  const [data, setData] = useState(propertyFields);
  const [isValid, setIsValid] = useState(false);
  const dispatch = useDispatch();
  const { property } = useSelector((state) => state);
  const { basic, location, details, contact, media } = property;
  const {
    propertyCategory,
    propertyType,
    bedrooms,
    bathrooms,
    bikeParking,
    carParking,
    carpetArea,
    superArea,
  } = basic;

  const { areaName, city, houseNumber, pinCode, societyName, state } = location;
  const {
    ageConstruction,
    availability,
    balconies,
    basis,
    description,
    facing,
    floorNo,
    furnishedStatus,
    maintenanceCharges,
    monthlyRent,
    petsPermission,
    securityAmount,
    tenantsPreferred,
    totalFloors,
    vegPermission,
    amenities,
  } = details;

  const { email, firstName, lastName, phoneNumber } = contact;
  const handleValidation = () => {
    if (property.position === 0) {
      if (
        !propertyCategory ||
        !propertyType ||
        !bedrooms ||
        !bathrooms ||
        !bikeParking ||
        !carParking ||
        carpetArea === ""
          ? true
          : false || superArea === ""
          ? true
          : false
      ) {
        setIsValid(true);
      } else {
        dispatch(forwordStep());
        setIsValid(false);
      }
    } else if (property.position === 1) {
      if (
        !areaName ||
        !city ||
        !houseNumber ||
        !pinCode ||
        !societyName ||
        !state
      ) {
        setIsValid(true);
      } else {
        dispatch(forwordStep());
        setIsValid(false);
      }
    } else if (property.position === 2) {
      if (
        !amenities ||
        !ageConstruction ||
        !availability ||
        !basis ||
        !description ||
        !facing ||
        !floorNo ||
        !balconies ||
        !furnishedStatus ||
        !maintenanceCharges ||
        !monthlyRent ||
        !petsPermission ||
        !securityAmount ||
        !tenantsPreferred ||
        !totalFloors ||
        !vegPermission
      ) {
        setIsValid(true);
      } else {
        dispatch(forwordStep());
        setIsValid(false);
      }
    } else if (property.position === 3) {
      if (!media.propertyImage || media.propertyImage?.length === 0) {
        setIsValid(true);
      } else {
        dispatch(forwordStep());
        setIsValid(false);
      }
    }
  };

  const Appear = () => {
    switch (property.position) {
      case 0:
        return <Info isValid={isValid} />;
        break;
      case 1:
        return <Location isValid={isValid} />;
        break;
      case 2:
        return <Details isValid={isValid} />;
        break;
      case 3:
        return <Media isValid={isValid} />;
        break;
      case 4:
        return <Contact isValid={isValid} />;
        break;
      default:
        return <></>;
    }
  };
  const userInfo = cookies.get("_info");

  const onSubmit = (data) => {
    const formData = new FormData();
    for (let i = 0; i < media.propertyImage?.length; i++) {
      formData.append("image", media.propertyImage[i]);
    }
    setDisable(true);
    authPost("/property/images", formData, userInfo.token).then((res) => {
     if (res.length > 0) {
      setDisable(false)
      if (!firstName || !lastName || !phoneNumber || !email) {
        setIsValid(true);
      } else {
        authPost(
          "/property",
          {
            ...property.basic,
            ...property.location,
            ...property.details,
            ...property.contact,
            images: res,
          },
          userInfo.token
        ).then((res) => {
          if (res?.success) {
            dispatch(submitData());
            toast.success(res.message);
            setDisable(false);
          }else{
            setDisable(false)
          }
        });
      }
     }else{
       toast.error('Image not selected')
       setDisable(false)
       dispatch(setRemoveMedia(null))
     }
    });
  };


  return (
    <Layout>
      <div className="container mt-5 mb-md-4 py-5">
        <nav className="mb-3 mb-md-4 pt-md-3" aria-label="Breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Add property
            </li>
          </ol>
        </nav>
        <div className="row justify-content-center pb-sm-2">
          <div className="col-lg-11 col-xl-10">
            <div className="text-center pb-4 mb-3">
              <h1 className="h2 mb-4">Add your property</h1>
              <p className="mb-4">
                Please add home for rent only, brokers are not allowed to add
                property
              </p>
            </div>
            <div className="bg-light rounded-3 py-4 px-md-4 mb-3">
              <div className="steps pt-4 pb-1">
                {FillData?.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className={`step ${
                        property.position >= index ? "active" : ""
                      }`}
                    >
                      <div className="step-progress">
                        <span className="step-progress-start" />
                        <span className="step-progress-end" />
                        <span className="step-number">{++index}</span>
                      </div>
                      <div className="step-label">{item.name}</div>
                    </div>
                  );
                })}
              </div>
            </div>
            {Appear()}
            <div className="d-flex flex-column flex-sm-row bg-light rounded-3 p-4 px-md-5">
              {property.position !== 0 && (
                <a
                  onClick={() => dispatch(backwordStep())}
                  className="btn btn-outline-primary btn-lg mb-3 mb-sm-0"
                >
                  <i className="fi-chevron-left fs-sm me-2" />
                  Previous step
                </a>
              )}
              {property.position !== 4 && (
                <button
                
                  onClick={() => {
                    handleValidation();
                  }}
                  className="btn btn-primary btn-lg ms-sm-auto"
                >
                  Next step
                  <i className="fi-chevron-right fs-sm ms-2" />
                </button>
              )}
              {property.position === 4 && (
                <button
                  disabled={disable}
                  onClick={onSubmit}
                  className="btn btn-primary btn-lg ms-sm-auto"
                >
                  {disable ? (
                    <ClipLoader
                      loading={true}
                      size={20}
                    />
                  ) : (
                    "Submit"
                  )}
               {!disable &&    <i className="fi-chevron-right fs-sm ms-2" />}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default AddProperty;
// export const getServerSideProps = userAuth((context) => {
//   return {
//     props: {},
//   };
// });
