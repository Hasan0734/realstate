import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import Cookies from "universal-cookie";
import { setTags } from "../../../../store/tags/actions";
import { authPost } from "../../../../__lib__/helpers/HttpService";
import Modals from "../Modals/Modals";

const TagModal = ({ trigger, setTrigger }) => {
  const dispatch = useDispatch();
  const [disable, setDisable] = useState(false);
  const cookies = new Cookies();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setDisable(true);
    const admins = await cookies.get("_admin");
    authPost("/admin/tag", data, admins.token).then((res) => {
      if (res.success) {
        toast.success(res.message);
        reset();
        setDisable(false);
        dispatch(setTags());
      } else {
        setDisable(false);
        toast.error(res.error);
      }
    });
  };
  return (
    <>
      <Modals trigger={trigger} setTrigger={setTrigger} size={""}>
        <h1 className="text-center mb-1" id="addNewCardTitle">
          Add New Tag
        </h1>
        {/* form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          id="addNewCardValidation"
          className="row gy-1 gx-2 mt-75"
          noValidate="novalidate"
        >
          <div className="col-12">
            <label className="form-label" htmlFor="tagName">
              Tag
            </label>
            <div className="input-group input-group-merge">
              <input
                {...register("tagName", { required: true })}
                id="tagName"
                name="tagName"
                className="form-control add-credit-card-mask"
                type="text"
                placeholder="Enter Tag name"
              />
            </div>
            {errors.tagName && (
              <div className="text-danger"> Tag name requird</div>
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
                className="btn btn-primary me-1 mt-1 waves-effect waves-float waves-light"
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

export default TagModal;
