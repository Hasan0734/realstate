import { yupResolver } from "@hookform/resolvers/yup";

import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import BeatLoader from "react-spinners/BeatLoader";
import Cookies from "universal-cookie";
import * as Yup from "yup";
// import { postData } from "./../../../../__lib__/helpers/HttpService";
import styles from "./Signup.module.css";

export default function Signup() {
  const cookies = new Cookies();
  // form validation rules
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name required"),
    email: Yup.string()
      .required("Email required")
      .matches(/\S+@\S+\.\S+/, "Invalid email"),
    password: Yup.string()
      .required("Password is required")
      .matches(
        /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}/,
        "At least one uppercase letter, one lowercase letter and one number"
      )
      .min(8, "Password must be at least 8 characters"),

    password_confirmation: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref("password")], "Passwords must match"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };
  const [loading, setLoading] = useState(true);
  const [color, setColor] = useState("#ffffff");
  const [disable, setDisable] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm(formOptions);
  const onSubmit = (data) => {
    setDisable(true);

    // postData("/user/register", data, setDisable).then((res) => {
    //   if (res?.user) {
    //     cookies.set("user_token", res.token, { path: "/" });
    //     toast.success(res.message);
    //     router.push("/login");
    //   }
    // });
  };

  return (
    <div>
      <section className={styles.signup__section}>
        <div className="container">
          <div className={styles.signup__form_wrapper}>
            <h3 className={styles.form__title}>Sign Up</h3>

            <form
              onSubmit={handleSubmit(onSubmit)}
              action=""
              className={styles.signup__form}
            >
              <input
                {...register("name", { required: true })}
                type="text"
                placeholder="Name"
              />
              {errors.name && (
                <span className="text-danger">Name is required</span>
              )}

              <input {...register("email")} type="text" placeholder="Email" />
              {errors.email?.type === "required" && (
                <div className="text-danger">{errors.email?.message}</div>
              )}
              {errors.email?.type === "matches" && (
                <div className="text-danger">{errors.email?.message}</div>
              )}

              <input
                name="password"
                type="password"
                {...register("password")}
                placeholder="Password"
                className={` ${errors.password ? "is-invalid" : ""}`}
              />
              <div className="text-danger">{errors.password?.message}</div>

              <input
                name="password_confirmation"
                type="password"
                {...register("password_confirmation")}
                placeholder="Confirmation password"
                className={` ${
                  errors.password_confirmation ? "is-invalid" : ""
                }`}
              />
              <div className="text-danger">
                {errors.password_confirmation?.message}
              </div>

              <button
                disabled={disable}
                type="submit"
                id="kt_sign_in_submit"
                className="btn btn-lg btn-primary fw-bolder me-3 my-2"
              >
                <span className="indicator-label">
                  {disable ? (
                    <BeatLoader color={color} loading={loading} size={12} />
                  ) : (
                    "Submit"
                  )}
                </span>
              </button>
              <p className="text-center">
                Already have account?{" "}
                <Link href="/login">
                  <a>Login</a>
                </Link>
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
