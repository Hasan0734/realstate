import Link from "next/link";
import React, { useEffect, useState } from "react";
import * as Icon from "react-feather";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import Cookies from "universal-cookie";
import { setTags } from "../../../../store/tags/actions";
import { getUserData, removeData } from "../../../../__lib__/helpers/HttpService";

const UserTableList = ({ user, setUsers }) => {
  const cookies = new Cookies();
  const [toggle, setToggle] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const closeAction = (e) => {
      if (e.path[1].tagName !== "BUTTON") {
        setToggle(false);
      }
    };
    document.body.addEventListener("click", closeAction);
    return () => document.body.removeEventListener("click", closeAction);
  }, []);

  const hanndleRemove = async (id) => {
    const admin = cookies.get('_admin')
      removeData(`/admin/users/${id}`, admin.token)
      .then(res => {
        if (res.success) {
          getUserData('/admin/users', admin.token)
          .then(res => setUsers({isLoading: false, userList: res}))
          toast.success(res.message);
        }else{
          toast.error(res.error)
        }
      })
  }
  
  return (
    <>
      <tr>
        <td>{user._id}</td>
        <td className="text-capitalize">
          <span className="me-1"><Icon.User className="text-danger" size={18}/></span>
          {user.name}
          </td>
        <td>
          <span className="me-1"><Icon.Mail className="text-danger" size={18}/></span>
          {user.email}
          </td>
        <td>
          <span className="me-1"><Icon.PhoneCall className="text-danger" size={18}/></span>
          {user.phone}</td>
        <td>
          <div className="dropdown">
            <button
              onClick={() => setToggle(!toggle)}
              id={user._id}
              type="button"
              className={`btn btn-sm dropdown-toggle hide-arrow py-0 waves-effect waves-float waves-light ${
                toggle ? "show" : ""
              }`}
              data-bs-toggle="dropdown"
            >
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
                className="feather feather-more-vertical"
              >
                <circle cx={12} cy={12} r={1} />
                <circle cx={12} cy={5} r={1} />
                <circle cx={12} cy={19} r={1} />
              </svg>
            </button>
            <div
              className={`dropdown-menu dropdown-menu-end ${
                toggle ? "show" : ""
              }`}
              style={
                toggle
                  ? {
                      position: "absolute",
                      inset: "0px auto auto 0px",
                      margin: "0px",
                      transform: "translate(-93px, 14px)",
                    }
                  : {}
              }
            >
              {/* <Link  href={`/admin/bodyparts/edit/${data._id}`}>
                <a className="dropdown-item" href="#">
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
                    className="feather feather-edit-2 me-50"
                  >
                    <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
                  </svg>
                  <span>Edit</span>
                </a>
              </Link> */}
              <a
              onClick={() => hanndleRemove(user._id)}
              className="dropdown-item">
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
                  className="feather feather-trash me-50"
                >
                  <polyline points="3 6 5 6 21 6" />
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                </svg>
                <span>Delete</span>
              </a>
            </div>
          </div>
        </td>
      </tr>
    </>
  );
};

export default UserTableList;
