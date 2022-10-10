import dateFormat from "dateformat";
import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import Cookies from "universal-cookie";
import { setBlogs } from "../../../../store/blogs/actions";
import { removeData } from "../../../../__lib__/helpers/HttpService";
const BlogCard = ({ data }) => {
  const cookies = new Cookies();
  const dispatch = useDispatch();
  const { _id, tags, category, title, image, body, postedBy } = data;
  const admin = cookies.get('_admin');
  const [disable, setDisable] = useState(false);


  const blogRemove = id => {

    const isTrue = confirm('Are you sure')
        if (isTrue) {
          setDisable(true);
          removeData(`/blog/${id}`, admin.token)
          .then(res => {
            if (res.success) {
              dispatch(setBlogs())
              toast.success(res.message)
              setDisable(false);
            }else{
              toast.error(res.error);
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
                <h6 className="text-success mb-0 py-1">#{_id}</h6>
                <h6 className="text-danger text-capitalize mb-0 py-1">
                  {title}
                </h6>
              </div>
              <div>
                <h6 className="text-warning py-1">
                  {dateFormat(data.createdAt, "mmm d, yyyy")}
                </h6>
                <button
                  onClick={() => blogRemove(_id)}
                  className="btn btn-danger"
                  disabled={disable}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className="row my-1">
              <div className="col">
                <img className="rounded" src={image} alt="image" />
              </div>
              <div className="col">
                  {/* <div>
                    <span 
                    style={{padding: '26px 11px'}}
                    className="bg-danger ms-4 rounded-circle">
                      <User className="text-secondary" size={50} />
                    </span>
                    <h5 className="mt-3">Author: {postedBy?.name}</h5>
                    <p className="card-text mb-0">Email: {postedBy?.email}</p>
                    <p className="card-text mb-0">Phone: {postedBy?.phone}</p>
                  </div> */}
              </div>
            </div>
            <div className="my-3 d-flex">
              <div className="me-4">
                <h5 className="mx-2">Tags</h5>
                <ul className="list-unstyled">
                  {tags.map((tag, i) => (
                    <li
                      className="btn btn-outline-primary rounded-pill text-capitalize text-success mx-2"
                      key={i}
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h5 className="mx-2">Category</h5>
                <button className="btn btn-outline-warning rounded text-success text-capitalize mx-2">
                  {category?.categoryName}
                </button>
              </div>
            </div>
            <div className="my-2">
              <h4>Description</h4>
              <p className="card-text">{body}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
