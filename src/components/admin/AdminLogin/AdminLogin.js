import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from 'react-redux';
import BeatLoader from "react-spinners/BeatLoader";
import Cookies from 'universal-cookie';
import { adminLogin } from '../../../../store/admins/actions';
import { postData } from '../../../../__lib__/helpers/HttpService';


export default function AdminLogin() {
    const [loading, setLoading] = useState(true);
    const [color, setColor] = useState("#ffffff");
    const cookies = new Cookies()
    const router = useRouter()
    const dispatch = useDispatch()
    const [disable, setDisable] = useState(false)
    const { settings } = useSelector(state => state)
    const { register, handleSubmit, formState: { errors }, } = useForm();

    const onSubmit = data => {
        setDisable(true)
        postData('/admin/login', data, setDisable)
            .then(res => {
                if (res?.success) {
                    cookies.set("_token", res.token, { path: '/' })
                    toast.success('Login Success')
                    dispatch(adminLogin({
                        token: res.token,
                        admin: res.admin
                    }))
                    router.push("/admin/dashboard")
                }
            })
    }
    return (

        <>
        
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <div className="d-flex flex-center align-items-center flex-column flex-column-fluid p-10 pb-lg-20" style={{ position: 'absolute', transform: 'translate(-50%, -50%)', top: '50%', left: '50%' }}>


                <div className="w-lg-500px bg-white rounded shadow-sm p-10 p-lg-15 mx-auto">
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="form w-100 fv-plugins-bootstrap5 fv-plugins-framework" noValidate="novalidate" id="kt_sign_in_form" action="#">
                        <div className="text-center mb-10">
                            <h1 className="text-dark mb-3">Sign In to Scouted</h1>
                        </div>

                        <div className="fv-row mb-10 fv-plugins-icon-container">
                            <label className="form-label fs-6 fw-bolder text-dark">Email</label>
                            <input {...register("email", { required: true, pattern: /\S+@\S+\.\S+/ })}
                                className="form-control form-control-lg form-control-solid"
                                autoComplete='off' type='text' name="email" />
                            <div className="fv-plugins-message-container">
                                {errors.email?.type === 'required' && <span className="text-danger">Email is required</span>}
                                {errors.email?.type === "pattern" && <span className="text-danger">Valid email required</span>}
                            </div>

                        </div>
                        <div className="fv-row mb-10 fv-plugins-icon-container">
                            <label className="form-label fw-bolder text-dark fs-6 mb-0">Password</label>
                            <input {...register("password", { required: true })}
                                className="form-control form-control-lg form-control-solid"
                                autoComplete='off' type='password' name="password"
                            />
                            <div className="fv-plugins-message-container" >
                                {errors.password && <span className="text-danger">Password is required</span>}
                            </div>

                        </div>
                        <div className="text-center">
                            <button
                                disabled={disable}
                                type="submit"
                                id="kt_sign_in_submit" className="btn btn-lg btn-primary fw-bolder me-3 my-2">
                                <span className="indicator-label">
                                    {disable ? <BeatLoader color={color} loading={loading} size={12} /> : 'Login'}

                                </span>
                            </button>
                        </div>
                        <div />
                        <Link href='/'>
                            <a>← Home</a>
                        </Link>
                    </form>
                </div>
            </div >
        </>
    );
}
