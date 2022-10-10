import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  Bell,
  Calendar,
  CheckSquare,
  CreditCard,
  HelpCircle,
  Mail,
  Menu,
  MessageSquare,
  Power,
  Search,
  Settings,
  ShoppingCart,
  User,
  X
} from "react-feather";
import avater from "/public/img/avatar-s-11.jpg";


const AdminNav = ({ toggle, setToggle }) => {
  const [showProfile, setShowProfile] = useState(false);

  useEffect(() => {
    const closeProfile = (e) => {
      if (e.path[3].tagName !== 'A') {
      setShowProfile(false);
        
      }
    };
    document.body.addEventListener("click", closeProfile);
    return () => document.body.removeEventListener('click', closeProfile)
  }, []);
  return (
    <>
      <nav
      style={{background: 'white', padding: '0'}}
       className="header-navbar navbar navbar-expand-lg
        align-items-center floating-nav navbar-light navbar-shadow container-xxl z-index-5">
        <div className="navbar-container d-flex content">
          <div className="bookmark-wrapper d-flex align-items-center">
            <ul className="nav navbar-nav d-xl-none">
              <li className="nav-item">
                <a
                  onClick={() => setToggle((prev) => !prev)}
                  className={`nav-link ${
                    toggle ? " menu-toggle is-active" : "nav-link menu-toggle"
                  }`}
                  href="#"
                >
                  <Menu />
                </a>
              </li>
            </ul>
            {/* <ul className="nav navbar-nav bookmark-icons">
              <li className="nav-item d-none d-lg-block">
                <a
                  className="nav-link"
                  href="app-email.html"
                  data-bs-toggle="tooltip"
                  data-bs-placement="bottom"
                  title="Email"
                >
                  <Mail />
                </a>
              </li>
              <li className="nav-item d-none d-lg-block">
                <a
                  className="nav-link"
                  href="app-chat.html"
                  data-bs-toggle="tooltip"
                  data-bs-placement="bottom"
                  title="Chat"
                >
                  <MessageSquare />
                </a>
              </li>
              <li className="nav-item d-none d-lg-block">
                <a
                  className="nav-link"
                  href="app-calendar.html"
                  data-bs-toggle="tooltip"
                  data-bs-placement="bottom"
                  title="Calendar"
                >
                  <Calendar />
                </a>
              </li>
              <li className="nav-item d-none d-lg-block">
                <a
                  className="nav-link"
                  href="app-todo.html"
                  data-bs-toggle="tooltip"
                  data-bs-placement="bottom"
                  title="Todo"
                >
                  <CheckSquare />
                </a>
              </li>
            </ul> */}
            {/* <ul className="nav navbar-nav">
              <li className="nav-item d-none d-lg-block">
                <a className="nav-link bookmark-star">
                  <i className="ficon text-warning" data-feather="star" />
                </a>
                <div className="bookmark-input search-input">
                  <div className="bookmark-input-icon">
                    <Search />
                  </div>
                  <input
                    className="form-control input"
                    type="text"
                    placeholder="Bookmark"
                    tabIndex={0}
                    data-search="search"
                  />
                  <ul className="search-list search-list-bookmark" />
                </div>
              </li>
            </ul> */}
          </div>
          <ul className="nav navbar-nav align-items-center ms-auto">
            {/* <li className="nav-item dropdown dropdown-language">
              <a
                className="nav-link dropdown-toggle"
                id="dropdown-flag"
                href="#"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="flag-icon flag-icon-us" />
                <span className="selected-language">English</span>
              </a>
              <div
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="dropdown-flag"
              >
                <a className="dropdown-item" href="#" data-language="en">
                  <i className="flag-icon flag-icon-us" /> 
                  English
                </a>
                <a className="dropdown-item" href="#" data-language="fr">
                  <i className="flag-icon flag-icon-fr" /> French
                </a>
                <a className="dropdown-item" href="#" data-language="de">
                  <i className="flag-icon flag-icon-de" /> German
                </a>
                <a className="dropdown-item" href="#" data-language="pt">
                  <i className="flag-icon flag-icon-pt" /> Portuguese
                </a>
              </div>
            </li>
            <li className="nav-item d-none d-lg-block">
              <a className="nav-link nav-link-style">
                <i className="ficon" data-feather="moon" />
              </a>
            </li>
            <li className="nav-item nav-search">
              <a className="nav-link nav-link-search">
                <i className="ficon" data-feather="search" />
              </a>
              <div className="search-input">
                <div className="search-input-icon">
                  <i data-feather="search" />
                </div>
                <input
                  className="form-control input"
                  type="text"
                  placeholder="Explore Vuexy..."
                  tabIndex={-1}
                  data-search="search"
                />
                <div className="search-input-close">
                  <X />
                </div>
                <ul className="search-list search-list-main" />
              </div>
            </li>
            <li className="nav-item dropdown dropdown-cart me-25">
              <a className="nav-link" href="#" data-bs-toggle="dropdown">
                <ShoppingCart />
                <span className="badge rounded-pill bg-primary badge-up cart-item-count">
                  6
                </span>
              </a>
              <ul className="dropdown-menu dropdown-menu-media dropdown-menu-end">
                <li className="dropdown-menu-header">
                  <div className="dropdown-header d-flex">
                    <h4 className="notification-title mb-0 me-auto">My Cart</h4>
                    <div className="badge rounded-pill badge-light-primary">
                      4 Items
                    </div>
                  </div>
                </li>
                <li className="scrollable-container media-list">
                  <div className="list-item align-items-center">
                    <img
                      className="d-block rounded me-1"
                      src="../../../app-assets/images/pages/eCommerce/1.png"
                      alt="donuts"
                      width={62}
                    />
                    <div className="list-item-body flex-grow-1">
                      <X />
                      <div className="media-heading">
                        <h6 className="cart-item-title">
                          <a
                            className="text-body"
                            href="app-ecommerce-details.html"
                          >
                            {" "}
                            Apple watch 5
                          </a>
                        </h6>
                        <small className="cart-item-by">By Apple</small>
                      </div>
                      <div className="cart-item-qty">
                        <div className="input-group">
                          <input
                            className="touchspin-cart"
                            type="number"
                            defaultValue={1}
                          />
                        </div>
                      </div>
                      <h5 className="cart-item-price">$374.90</h5>
                    </div>
                  </div>
                  <div className="list-item align-items-center">
                    <img
                      className="d-block rounded me-1"
                      src="../../../app-assets/images/pages/eCommerce/7.png"
                      alt="donuts"
                      width={62}
                    />
                    <div className="list-item-body flex-grow-1">
                      <X />
                      <div className="media-heading">
                        <h6 className="cart-item-title">
                          <a
                            className="text-body"
                            href="app-ecommerce-details.html"
                          >
                            {" "}
                            Google Home Mini
                          </a>
                        </h6>
                        <small className="cart-item-by">By Google</small>
                      </div>
                      <div className="cart-item-qty">
                        <div className="input-group">
                          <input
                            className="touchspin-cart"
                            type="number"
                            defaultValue={3}
                          />
                        </div>
                      </div>
                      <h5 className="cart-item-price">$129.40</h5>
                    </div>
                  </div>
                  <div className="list-item align-items-center">
                    <img
                      className="d-block rounded me-1"
                      src="../../../app-assets/images/pages/eCommerce/2.png"
                      alt="donuts"
                      width={62}
                    />
                    <div className="list-item-body flex-grow-1">
                      <i className="ficon cart-item-remove" data-feather="x" />
                      <div className="media-heading">
                        <h6 className="cart-item-title">
                          <a
                            className="text-body"
                            href="app-ecommerce-details.html"
                          >
                            {" "}
                            iPhone 11 Pro
                          </a>
                        </h6>
                        <small className="cart-item-by">By Apple</small>
                      </div>
                      <div className="cart-item-qty">
                        <div className="input-group">
                          <input
                            className="touchspin-cart"
                            type="number"
                            defaultValue={2}
                          />
                        </div>
                      </div>
                      <h5 className="cart-item-price">$699.00</h5>
                    </div>
                  </div>
                  <div className="list-item align-items-center">
                    <img
                      className="d-block rounded me-1"
                      src="../../../app-assets/images/pages/eCommerce/3.png"
                      alt="donuts"
                      width={62}
                    />
                    <div className="list-item-body flex-grow-1">
                      <i className="ficon cart-item-remove" data-feather="x" />
                      <div className="media-heading">
                        <h6 className="cart-item-title">
                          <a
                            className="text-body"
                            href="app-ecommerce-details.html"
                          >
                            {" "}
                            iMac Pro
                          </a>
                        </h6>
                        <small className="cart-item-by">By Apple</small>
                      </div>
                      <div className="cart-item-qty">
                        <div className="input-group">
                          <input
                            className="touchspin-cart"
                            type="number"
                            defaultValue={1}
                          />
                        </div>
                      </div>
                      <h5 className="cart-item-price">$4,999.00</h5>
                    </div>
                  </div>
                  <div className="list-item align-items-center">
                    <img
                      className="d-block rounded me-1"
                      src="../../../app-assets/images/pages/eCommerce/5.png"
                      alt="donuts"
                      width={62}
                    />
                    <div className="list-item-body flex-grow-1">
                      <i className="ficon cart-item-remove" data-feather="x" />
                      <div className="media-heading">
                        <h6 className="cart-item-title">
                          <a
                            className="text-body"
                            href="app-ecommerce-details.html"
                          >
                            {" "}
                            MacBook Pro
                          </a>
                        </h6>
                        <small className="cart-item-by">By Apple</small>
                      </div>
                      <div className="cart-item-qty">
                        <div className="input-group">
                          <input
                            className="touchspin-cart"
                            type="number"
                            defaultValue={1}
                          />
                        </div>
                      </div>
                      <h5 className="cart-item-price">$2,999.00</h5>
                    </div>
                  </div>
                </li>
                <li className="dropdown-menu-footer">
                  <div className="d-flex justify-content-between mb-1">
                    <h6 className="fw-bolder mb-0">Total:</h6>
                    <h6 className="text-primary fw-bolder mb-0">$10,999.00</h6>
                  </div>
                  <a
                    className="btn btn-primary w-100"
                    href="app-ecommerce-checkout.html"
                  >
                    Checkout
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown dropdown-notification me-25">
              <a className="nav-link" href="#" data-bs-toggle="dropdown">
                <Bell />
                <span className="badge rounded-pill bg-danger badge-up">5</span>
              </a>
              <ul className="dropdown-menu dropdown-menu-media dropdown-menu-end">
                <li className="dropdown-menu-header">
                  <div className="dropdown-header d-flex">
                    <h4 className="notification-title mb-0 me-auto">
                      Notifications
                    </h4>
                    <div className="badge rounded-pill badge-light-primary">
                      6 New
                    </div>
                  </div>
                </li>
                <li className="scrollable-container media-list">
                  <a className="d-flex" href="#">
                    <div className="list-item d-flex align-items-start">
                      <div className="me-1">
                        <div className="avatar">
                          <img
                            src="public/img/avatar-s-11.jpg"
                            alt="avatar"
                            width={32}
                            height={32}
                          />
                        </div>
                      </div>
                      <div className="list-item-body flex-grow-1">
                        <p className="media-heading">
                          <span className="fw-bolder">
                            Congratulation Sam 🎉
                          </span>
                          winner!
                        </p>
                        <small className="notification-text">
                          {" "}
                          Won the monthly best seller badge.
                        </small>
                      </div>
                    </div>
                  </a>
                  <a className="d-flex" href="#">
                    <div className="list-item d-flex align-items-start">
                      <div className="me-1">
                        <div className="avatar">
                          <img
                            src="public/img/avatar-s-11.jpg"
                            alt="avatar"
                            width={32}
                            height={32}
                          />
                        </div>
                      </div>
                      <div className="list-item-body flex-grow-1">
                        <p className="media-heading">
                          <span className="fw-bolder">New message</span>
                          &nbsp;received
                        </p>
                        <small className="notification-text">
                          {" "}
                          You have 10 unread messages
                        </small>
                      </div>
                    </div>
                  </a>
                  <a className="d-flex" href="#">
                    <div className="list-item d-flex align-items-start">
                      <div className="me-1">
                        <div className="avatar bg-light-danger">
                          <div className="avatar-content">MD</div>
                        </div>
                      </div>
                      <div className="list-item-body flex-grow-1">
                        <p className="media-heading">
                          <span className="fw-bolder">Revised Order 👋</span>
                          &nbsp;checkout
                        </p>
                        <small className="notification-text">
                          {" "}
                          MD Inc. order updated
                        </small>
                      </div>
                    </div>
                  </a>
                  <div className="list-item d-flex align-items-center">
                    <h6 className="fw-bolder me-auto mb-0">
                      System Notifications
                    </h6>
                    <div className="form-check form-check-primary form-switch">
                      <input
                        className="form-check-input"
                        id="systemNotification"
                        type="checkbox"
                        defaultChecked
                      />
                      <label
                        className="form-check-label"
                        htmlFor="systemNotification"
                      />
                    </div>
                  </div>
                  <a className="d-flex" href="#">
                    <div className="list-item d-flex align-items-start">
                      <div className="me-1">
                        <div className="avatar bg-light-danger">
                          <div className="avatar-content">
                            <i className="avatar-icon" data-feather="x" />
                          </div>
                        </div>
                      </div>
                      <div className="list-item-body flex-grow-1">
                        <p className="media-heading">
                          <span className="fw-bolder">Server down</span>
                          &nbsp;registered
                        </p>
                        <small className="notification-text">
                          {" "}
                          USA Server is down due to high CPU usage
                        </small>
                      </div>
                    </div>
                  </a>
                  <a className="d-flex" href="#">
                    <div className="list-item d-flex align-items-start">
                      <div className="me-1">
                        <div className="avatar bg-light-success">
                          <div className="avatar-content">
                            <i className="avatar-icon" data-feather="check" />
                          </div>
                        </div>
                      </div>
                      <div className="list-item-body flex-grow-1">
                        <p className="media-heading">
                          <span className="fw-bolder">Sales report</span>
                          &nbsp;generated
                        </p>
                        <small className="notification-text">
                          {" "}
                          Last month sales report generated
                        </small>
                      </div>
                    </div>
                  </a>
                  <a className="d-flex" href="#">
                    <div className="list-item d-flex align-items-start">
                      <div className="me-1">
                        <div className="avatar bg-light-warning">
                          <div className="avatar-content">
                            <i
                              className="avatar-icon"
                              data-feather="alert-triangle"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="list-item-body flex-grow-1">
                        <p className="media-heading">
                          <span className="fw-bolder">High memory</span>
                          &nbsp;usage
                        </p>
                        <small className="notification-text">
                          {" "}
                          BLR Server using high memory
                        </small>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="dropdown-menu-footer">
                  <a className="btn btn-primary w-100" href="#">
                    Read all notifications
                  </a>
                </li>
              </ul>
            </li> */}
            <li className="nav-item dropdown dropdown-user">
              <a
                onClick={() => setShowProfile(!showProfile)}
                className={`nav-link dropdown-toggle dropdown-user-link ${
                  showProfile ? "show" : ""
                }`}
                id="dropdown-user"
                href="#"
                data-bs-toggle="dropdown"
                aria-expanded={showProfile}
              >
                <div className="user-nav d-sm-flex d-none">
                  <span className="user-name fw-bolder">John Doe</span>
                  <span className="user-status">Admin</span>
                </div>
                <span className="avatar">
                  <Image
                    className="round"
                    src={avater}
                    alt="avatar"
                    height={40}
                    width={40}
                  />
                  <span className="avatar-status-online" />
                </span>
              </a>
              {/* <div
                className={`dropdown-menu dropdown-menu-end ${
                  showProfile ? "show" : ""
                }`}
                aria-labelledby="dropdown-user"
              >
                <a className="dropdown-item" href="page-profile.html">
                  <User className="me-50"/>
                   Profile
                </a>
                <a className="dropdown-item" href="app-email.html">
                  <Mail className="me-50"/>
                  Inbox
                </a>
                <a className="dropdown-item" href="app-todo.html">
                  <CheckSquare className="me-50"/>
                  Task
                </a>
                <a className="dropdown-item" href="app-chat.html">
                  <MessageSquare className="me-50"/>
                   Chats
                </a>
                <div className="dropdown-divider" />
                <a
                  className="dropdown-item"
                  href="page-account-settings-account.html"
                >
                  <Settings className="me-50" />
                  Settings
                </a>
                <a className="dropdown-item" href="page-pricing.html">
                  <CreditCard className="me-50" />
                  Pricing
                </a>
                <a className="dropdown-item" href="page-faq.html">
                  <HelpCircle className="me-50"/>
                   FAQ
                </a>
                <a className="dropdown-item" href="auth-login-cover.html">
                  <Power className="me-50"/>
                  Logout
                </a>
              </div> */}
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default AdminNav;
