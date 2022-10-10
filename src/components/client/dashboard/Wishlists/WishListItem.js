import Link from "next/link";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "universal-cookie";
import { userLogin } from "../../../../../store/users/actions";
import { updateData } from "../../../../../__lib__/helpers/HttpService";
import queryString from "query-string";

const WishListItem = ({ property }) => {
  const cookies = new Cookies();
  const { users } = useSelector((state) => state);
  const dispatch = useDispatch();
  const router = useRouter();
  const {
    bedrooms,
    propertyType,
    monthlyRent,
    furnishedStatus,
    areaName,
    city,
    state,
    images,
    _id,
  } = property;

  const query = queryString.stringify(
    {
      bedrooms: bedrooms + " " + "bed",
      propertyType: propertyType,
      areaName: areaName,
      city: city,
      state: state,
      id: _id,
    },
    { sort: false }
  );
  const addWishlist = async (propertyId) => {
    const user = await cookies.get("_info");
    if (user?.token) {
      const res = await updateData(
        `/user/wishlist/${propertyId}`,
        {},
        user.token
      );
      if (res.success) {
        toast.success(res.message);
        dispatch(userLogin({success: res.success, token: res.token, user: res.update}));
      } else {
        toast.error(res.error);
      }
    } else {
      router.push("/signin");
    }
  };
  return (
    <>
      <div className="col pt-2">
        <div className="position-relative">
          <div className="position-relative mb-3">
            <button
            onClick={() => addWishlist(_id)}
              className="btn btn-icon btn-light-primary btn-xs text-primary rounded-circle position-absolute top-0 end-0 m-3 zindex-5"
              type="button"
              data-bs-toggle="tooltip"
              data-bs-placement="left"
              title="Remove from Favorites"
            >
              <i className="fi-heart-filled" />
            </button>
            <img className="rounded-3" src={images[0]} alt="Article img" />
          </div>
          <h3 className="mb-2 fs-lg">
          <Link href={`property?${query}`}>
            <a className="nav-link stretched-link" href="#">
              {bedrooms} Bed {propertyType} | ₹ {monthlyRent}
            </a>
            </Link>
          </h3>
          <ul className="list-inline mb-0 fs-xs">
            <li className="list-inline-item pe-1">
              <i className="fi-map-pin mt-n1 me-1 fs-base text-muted align-middle" />
              {areaName} {city} in {state}
            </li>
            <li className="list-inline-item pe-1">
              <i className="fi-bed mt-n1 me-1 fs-base text-muted align-middle" />
              {furnishedStatus}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default WishListItem;
