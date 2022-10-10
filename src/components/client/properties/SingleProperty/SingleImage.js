import Link from "next/link";
import { useRouter } from "next/router";
import queryString from "query-string";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "universal-cookie";
import { userLogin } from "../../../../../store/users/actions";
import { updateData } from "../../../../../__lib__/helpers/HttpService";

const SingleImage = ({ property }) => {
  const cookies = new Cookies();
  const query = queryString.stringify(
    {
      bedrooms: property.bedrooms + " " + "bed",
      propertyType: property.propertyType,
      areaName: property.areaName , 
      city: property.city,
      state:  property.state,
      id: property._id,
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
      <div
        className="card-img-top position-relative"
        style={{ backgroundImage: `url(${property?.images[0]})` }}
      >
        <Link href={`property?${query}`}>
          <a className="stretched-link" href="" />
        </Link>
        <div className="position-absolute start-0 top-0 pt-3 ps-3">
          <span className="d-table badge bg-success mb-1">Verified</span>
        </div>
        <div className="position-absolute end-0 top-0 pt-3 pe-3 zindex-5">
          <button
            onClick={() => addWishlist(property?._id)}
            className={`
            ${users.user?.wishlists.some(pr => pr._id === property?._id) ? 'active' : ''} btn btn-icon btn-light-primary btn-xs text-primary
            rounded-circle position-absolute top-0 end-0 m-3 zindex-5`}
            type="button"
            data-bs-toggle="tooltip"
            data-bs-placement="left"
            title="Add to Wishlist"
          >
            <i className="fi-heart" />
          </button>
        </div>
      </div>
    </>
  );
};

export default SingleImage;
