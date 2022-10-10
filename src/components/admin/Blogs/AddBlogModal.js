import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import Cookies from "universal-cookie";
import { setBlogs } from "../../../../store/blogs/actions";
import { setCategories } from "../../../../store/catrgories/actions";
import { setTags } from "../../../../store/tags/actions";
import { authPost } from "../../../../__lib__/helpers/HttpService";
import Modals from "../Modals/Modals";

const AddBlogModal = ({ trigger, setTrigger }) => {
  const dispatch = useDispatch();
  const [disable, setDisable] = useState(false);
  const cookies = new Cookies();
  const [selectedTag, setSelectedTag] = useState(null);
  const { categories, tags } = useSelector((state) => state);
  const { categoryList } = categories;
  const { tagList } = tags;
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    dispatch(setCategories());
    dispatch(setTags());
  }, []);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setIsValid(true);
  
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("body", data.body);
    formData.append("image", data.image[0]);
    formData.append("category", data.category);
    for (let i = 0; i < selectedTag?.length; i++) {
      formData.append("tags[]", selectedTag[i].value);
    }
  
      await submit(formData);
  
  };
  console.log(watch().category !== "true" && isValid)

  
  const submit = async (data) => {
    const admins = await cookies.get("_admin");
   if (watch().category !== "true" && isValid) {
    setDisable(true);
    authPost("/blog", data, admins.token).then((res) => {
      if (res.success) {
        toast.success(res.message);
        reset();
        setDisable(false);
        dispatch(setBlogs());
        setTrigger(false);
      } else {
        setDisable(false);
        toast.error(res.message);
      }
    });
   }
  };

  const handleSelectTag = (e) => {
    setSelectedTag(e);
  };
  const tagsOption = tagList?.map((tag) => ({
    label: tag.tagName,
    value: tag.tagSlug,
  }));

  
  return (
    <>
      <Modals trigger={trigger} setTrigger={setTrigger} size={""}>
        <h3 className="text-center mb-1" id="addNewCardTitle">
          Add New Blog
        </h3>
        {/* form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          id="addNewCardValidation"
          className="row gy-1 gx-2 mt-75"
          noValidate="novalidate"
        >
          <div className="col-12">
            <label className="form-label" htmlFor="title">
              Title
            </label>
            <div className="input-group input-group-merge">
              <input
                {...register("title", { required: true })}
                id="title"
                name="title"
                className="form-control add-credit-card-mask"
                type="text"
                placeholder="Enter Title"
              />
            </div>
            {errors.title && <div className="text-danger">Title required </div>}
          </div>
          <div className="col-12">
            <label className="form-label" htmlFor="body">
              Description
            </label>
            <div className="input-group input-group-merge">
              <textarea
                {...register("body", { required: true })}
                id="body"
                name="body"
                className="form-control add-credit-card-mask"
                type="text"
              />
            </div>
            {errors.title && (
              <div className="text-danger">Description required </div>
            )}
          </div>
          <div className="col-12">
            <label className="form-label" htmlFor="image">
              Image
            </label>
            <div className="input-group input-group-merge">
              <input
                {...register("image", { required: true })}
                id="image"
                name="image"
                className="form-control add-credit-card-mask"
                type="file"
              />
            </div>
            {errors.image && <div className="text-danger">Image required </div>}
          </div>
          <div className="col-12">
            <label className="form-label" htmlFor="category">
              Category
            </label>
            <div className="input-group input-group-merge">
              <select
                {...register("category", { required: true })}
                id="category"
                name="category"
                className="form-control text-capitalize add-credit-card-mask"
              >
                <option value disabled selected>
                  Category
                </option>
                {categoryList?.map((cate) => (
                  <option
                    className="text-capitalize"
                    key={cate._id}
                    value={cate._id}
                  >
                    {cate.categoryName}
                  </option>
                ))}
              </select>
            </div>
            {watch().category === "true" && isValid && (
              <div className="text-danger">Category required </div>
            )}
          </div>
          <div className="col-12">
            <label className="form-label" htmlFor="tag">
              Tag
            </label>
            <div className="input-group input-group-merge">
              <Select
                onChange={handleSelectTag}
                isMulti
                name="colors"
                options={tagsOption}
                className="basic-multi-select w-100"
                classNamePrefix="select"
              />
            </div>
            {errors.tag && (
              <div className="text-danger">Category required </div>
            )}
          </div>
          <div className="col-12 text-center">
            {disable ? (
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            ) : (
              <button
                type="submit"
                className="btn btn-success me-1 mt-1 waves-effect waves-float waves-light"
              >
                Submit
              </button>
            )}
          </div>
        </form>
      </Modals>
    </>
  );
};

export default AddBlogModal;
