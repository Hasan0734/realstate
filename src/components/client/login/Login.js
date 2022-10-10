import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from 'react';
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch } from 'react-redux';
import BeatLoader from "react-spinners/BeatLoader";
import Cookies from 'universal-cookie';
import { postData } from "../../../../__lib__/helpers/HttpService";
import { userLogin } from './../../../../store/users/actions';
import Layout from './../layout/index';
import styles from './Login.module.css';

export default function Login() {
  const [loading, setLoading] = useState(true);
  const [color, setColor] = useState("#ffffff");
  const [disable, setDisable] = useState(false)
  const cookies = new Cookies()
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const router = useRouter()
  const dispatch = useDispatch()
  const onSubmit = data => {

    setDisable(true)

    postData('/user/login', data, setDisable)
      .then(res => {
        if (res?.success) {
          cookies.set("user_token", res.token, { path: '/' })
          toast.success('Login Success')
          dispatch(userLogin({
            token: res.token,
            user: res.user
          }))
          router.push("/user/dashboard")
        }
      })
  }

  return (
    <Layout>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <section className={styles.login__section}>
        <div className="container">
          <div className={styles.login__form_wrapper}>
            <h3 className={styles.form__title}>Login</h3>
            <form onSubmit={handleSubmit(onSubmit)} action="" className={styles.login__form}>
              
              <input {...register("email", { required: true, pattern: /\S+@\S+\.\S+/ })} type="text" placeholder="Email" />

              {errors.email?.type === 'required' && <span className="text-danger">Email is required</span>}
              {errors.email?.type === "pattern" && <span className="text-danger">Valid email required</span>}


              <input {...register("password", { required: true })} placeholder="Password" type="password" />
              {errors.password && <span className="text-danger">Password is required</span>}


              <div className="text-center">
                <button
                  disabled={disable}
                  type="submit"
                  id="kt_sign_in_submit" className="btn btn-lg btn-primary fw-bolder me-3 my-2">
                  <span className="indicator-label">
                    {disable ? <BeatLoader color={color} loading={loading} size={12} /> : 'Submit'}

                  </span>
                </button>
              </div>

              {/* <button type="reset">Forgot Password?</button> */}
              <p className="text-center">
                <Link href="/signup">
                  <a>Create new account</a>
                </Link>
              </p>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
}
