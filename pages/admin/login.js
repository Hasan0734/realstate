import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import Cookies from 'universal-cookie';
import { adminLogin } from './../../store/admins/actions';
import { postData } from "./../../__lib__/helpers/HttpService";
const Login = () => {
  const cookies = new Cookies()


  const [disable, setDisable] = useState(false);
  const [passShow, setPassShow] = useState("password");
  const dispatch = useDispatch()
  const router = useRouter()
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setDisable(true);
    postData("admin/login", data, setDisable).then((res) => {
      if (res?.success) {
        cookies.set("_admin", JSON.stringify({
          token: res.token,
          admin: res.admin
      }), { path: '/' });
        toast.success('Login Success')
        dispatch(adminLogin({
            token: res.token,
            admin: res.admin
        }))
        router.push("/admin/dashboard")
    }
    });
  };

  return (
    <>

    <Head>
      <title>Admin login</title>
    <link rel="stylesheet" href="/css2/bootstrap-extended.css"/>
      <link rel="stylesheet" href="/css2/bootstrap.css"/>
      <link rel="stylesheet" href="/css2/colors.css"/>
      <link rel="stylesheet" href="/css2/components.css"/>
      <link rel="stylesheet" href="/css2/core/menu/menu-types/vertical-menu.css"/>
      <link rel="stylesheet" href="/css2/pages/authentication.css" />
    </Head>
      <div className="vertical-layout vertical-menu-modern blank-page navbar-floating footer-static">
      <div className="app-content content ">
        <div className="content-overlay" />
        <div className="header-navbar-shadow" />
        <div className="content-wrapper">
          <div className="content-header row"></div>
          <div className="content-body">
            <div className="auth-wrapper auth-basic px-2">
              <div className="auth-inner my-2">
                {/* Login basic */}
                <div className="card mb-0">
                  <div className="card-body">
                   <Link href="/admin/dashboard">
                   <a  className="brand-logo">
                      <svg
                        viewBox="0 0 139 95"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        height={28}
                      >
                        <defs>
                          <linearGradient
                            id="linearGradient-1"
                            x1="100%"
                            y1="10.5120544%"
                            x2="50%"
                            y2="89.4879456%"
                          >
                            <stop stopColor="#000000" offset="0%" />
                            <stop stopColor="#FFFFFF" offset="100%" />
                          </linearGradient>
                          <linearGradient
                            id="linearGradient-2"
                            x1="64.0437835%"
                            y1="46.3276743%"
                            x2="37.373316%"
                            y2="100%"
                          >
                            <stop
                              stopColor="#EEEEEE"
                              stopOpacity={0}
                              offset="0%"
                            />
                            <stop stopColor="#FFFFFF" offset="100%" />
                          </linearGradient>
                        </defs>
                        <g
                          id="Page-1"
                          stroke="none"
                          strokeWidth={1}
                          fill="none"
                          fillRule="evenodd"
                        >
                          <g
                            id="Artboard"
                            transform="translate(-400.000000, -178.000000)"
                          >
                            <g
                              id="Group"
                              transform="translate(400.000000, 178.000000)"
                            >
                              <path
                                className="text-primary"
                                id="Path"
                                d="M-5.68434189e-14,2.84217094e-14 L39.1816085,2.84217094e-14 L69.3453773,32.2519224 L101.428699,2.84217094e-14 L138.784583,2.84217094e-14 L138.784199,29.8015838 C137.958931,37.3510206 135.784352,42.5567762 132.260463,45.4188507 C128.736573,48.2809251 112.33867,64.5239941 83.0667527,94.1480575 L56.2750821,94.1480575 L6.71554594,44.4188507 C2.46876683,39.9813776 0.345377275,35.1089553 0.345377275,29.8015838 C0.345377275,24.4942122 0.230251516,14.560351 -5.68434189e-14,2.84217094e-14 Z"
                                style={{ fill: "currentColor" }}
                              />
                              <path
                                id="Path1"
                                d="M69.3453773,32.2519224 L101.428699,1.42108547e-14 L138.784583,1.42108547e-14 L138.784199,29.8015838 C137.958931,37.3510206 135.784352,42.5567762 132.260463,45.4188507 C128.736573,48.2809251 112.33867,64.5239941 83.0667527,94.1480575 L56.2750821,94.1480575 L32.8435758,70.5039241 L69.3453773,32.2519224 Z"
                                fill="url(#linearGradient-1)"
                                opacity="0.2"
                              />
                              <polygon
                                id="Path-2"
                                fill="#000000"
                                opacity="0.049999997"
                                points="69.3922914 32.4202615 32.8435758 70.5039241 54.0490008 16.1851325"
                              />
                              <polygon
                                id="Path-21"
                                fill="#000000"
                                opacity="0.099999994"
                                points="69.3922914 32.4202615 32.8435758 70.5039241 58.3683556 20.7402338"
                              />
                              <polygon
                                id="Path-3"
                                fill="url(#linearGradient-2)"
                                opacity="0.099999994"
                                points="101.428699 0 83.0667527 94.1480575 130.378721 47.0740288"
                              />
                            </g>
                          </g>
                        </g>
                      </svg>
                      <h2 className="brand-text text-primary ms-1">Vuexy</h2>
                    </a>
                   </Link>
                    <h4 className="card-title mb-1">Welcome to Vuexy! 👋</h4>
                    <p className="card-text mb-2">
                      Please sign-in to your account and start the adventure
                    </p>
                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      className="auth-login-form mt-2"
                    >
                      <div className="mb-1">
                        <label htmlFor="login-email" className="form-label">
                          Email
                        </label>
                        <input
                          {...register("email", { required: true })}
                          type="text"
                          className="form-control"
                          id="email"
                          name="email"
                          placeholder="john@example.com"
                          aria-describedby="email"
                          tabIndex={1}
                          autoFocus
                        />
                      </div>
                      <div className="mb-1">
                        <div className="d-flex justify-content-between">
                          <label
                            className="form-label"
                            htmlFor="login-password"
                          >
                            Password
                          </label>
                          {/* <a href="auth-forgot-password-basic.html">
                            <small>Forgot Password?</small>
                          </a> */}
                        </div>
                        <div className="input-group input-group-merge form-password-toggle">
                          <input
                            {...register("password", { required: true })}
                            type={passShow ? "password" : "text"}
                            className="form-control form-control-merge"
                            id="password"
                            name="password"
                            tabIndex={2}
                            placeholder="············"
                            aria-describedby="login-password"
                          />
                          <span
                            onClick={() => setPassShow(!passShow)}
                            className="input-group-text cursor-pointer"
                          >
                            {!passShow ? (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-eye-off font-small-4"
                              >
                                <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                                <line x1={1} y1={1} x2={23} y2={23} />
                              </svg>
                            ) : (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-eye font-small-4"
                              >
                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                <circle cx={12} cy={12} r={3} />
                              </svg>
                            )}
                          </span>
                        </div>
                      </div>
                      <div className="mb-1">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="remember-me"
                            tabIndex={3}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="remember-me"
                          >
                            {" "}
                            Remember Me{" "}
                          </label>
                        </div>
                      </div>
                      <button className="btn btn-primary w-100" tabIndex={4}>
                        Sign in
                      </button>
                    </form>
                    {/* <p className="text-center mt-2">
                      <span>New on our platform?</span>
                      <a href="auth-register-basic.html">
                        <span>Create an account</span>
                      </a>
                    </p>
                    <div className="divider my-2">
                      <div className="divider-text">or</div>
                    </div>
                    <div className="auth-footer-btn d-flex justify-content-center">
                      <a href="#" className="btn btn-facebook">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={14}
                          height={14}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-facebook"
                        >
                          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                        </svg>
                      </a>
                      <a href="#" className="btn btn-twitter white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={14}
                          height={14}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-twitter"
                        >
                          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                        </svg>
                      </a>
                      <a href="#" className="btn btn-google">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={14}
                          height={14}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-mail"
                        >
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                          <polyline points="22,6 12,13 2,6" />
                        </svg>
                      </a>
                      <a href="#" className="btn btn-github">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={14}
                          height={14}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-github"
                        >
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                        </svg>
                      </a>
                    </div> */}
                  </div>
                </div>
                {/* /Login basic */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Login;
