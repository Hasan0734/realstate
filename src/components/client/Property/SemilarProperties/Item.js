import { useRouter } from "next/router";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "universal-cookie";
import { userLogin } from "../../../../../store/users/actions";
import { updateData } from "../../../../../__lib__/helpers/HttpService";


const Item = ({property}) => {


  const { users } = useSelector((state) => state);
  const dispatch = useDispatch();
  const router = useRouter();
  const addWishlist = async (propertyId) => {
    const cookies = new Cookies();
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
      <div className="px-2">
        <div className="position-relative">
          <div className="position-relative mb-3">
            <button
              onClick={() => addWishlist(property?._id)}
              className={` ${users.user?.wishlists.some(pr => pr._id === property?._id) ? 'active' : ''} btn btn-icon btn-light-primary btn-xs text-primary
              rounded-circle position-absolute top-0 end-0 m-3 zindex-5`}
              type="button"
              data-bs-toggle="tooltip"
              data-bs-placement="left"
              title="Add to Wishlist"
            >
              <i className="fi-heart" />
            </button>
            <img
              style={{ height: "222px", width: '100%' }}
              className="rounded-3"
              src={property.images[0]}
              alt="Article img"
            />
          </div>
          <h3 className="mb-2 fs-lg">
            <a className="nav-link" href="#">
              {property.bedrooms} Bed {property.propertyType} | ₹ {property.monthlyRent}
            </a>
          </h3>
          <ul className="list-inline mb-0 fs-xs">
            <li className="list-inline-item pe-1">
              <i className="fi-map-pin mt-n1 me-1 fs-base text-muted align-middle" />
              {property.areaName} {property.city} in {property.state}
            </li>
            <li className="list-inline-item pe-1">
              <i className="fi-bed mt-n1 me-1 fs-base text-muted align-middle" />
              {property.furnishedStatus}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Item;
