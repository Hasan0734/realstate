import Link from "next/link";
import { useRouter } from "next/router";
import queryString from "query-string";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "universal-cookie";
import { userLogin } from "../../../../../store/users/actions";
import { updateData } from "../../../../../__lib__/helpers/HttpService";

const RecentItem = ({ recent }) => {
  const cookies = new Cookies();
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
  } = recent;

  const query = queryString.stringify(
    {
      bedrooms: recent.bedrooms + " " + "bed",
      propertyType: recent.propertyType,
      areaName: recent.areaName,
      city: recent.city,
      state: recent.state,
      id: recent._id,
    },
    { sort: false }
  );
  const { users } = useSelector((state) => state);
  const dispatch = useDispatch();
  const router = useRouter();
  
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
      <div className="px-3">
        <div className="position-relative">
          <div className="position-relative mb-3">
            <button
              onClick={() => addWishlist(_id)}
              className={` ${users.user?.wishlists.some(pr => pr._id === _id) ? 'active' : ''} btn btn-icon btn-light-primary btn-xs text-primary
              rounded-circle position-absolute top-0 end-0 m-3 zindex-5`}
              type="button"
              title="Add to Wishlist"
            >
              <i className="fi-heart" />
            </button>
            <img
              style={{ height: "250px", width: "100%" }}
              className="rounded-3"
              src={images[0]}
              alt="Article img"
            />
          </div>
          <h3 className="mb-2 fs-lg">
            <Link href={`property?${query}`}>
              <a className="nav-link">
                {bedrooms} Bed {propertyType} | ₹ {monthlyRent}
              </a>
            </Link>
          </h3>
          <ul className="list-inline mb-0 fs-xs">
            <li className="list-inline-item pe-1">
              <i className="fi-map-pin mt-n1 me-1 fs-base text-muted align-middle " />
              <span className="text-capitalize">
                {areaName} {city} in {state}
              </span>
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

export default RecentItem;
