import Link from "next/link";
import { useRouter } from "next/router";

export default function Footer() {
  const router = useRouter();
  return (
    <footer className="footer bg-dark pt-2">
      <div className="border-bottom border-light py-4">
        <div className="container d-sm-flex align-items-center justify-content-between">
          <img
            src="img/rokye-website/logowhitetransparent.png"
            width={140}
            alt="logo"
          />
          <div className="d-flex pt-3 pt-sm-0"></div>
        </div>
      </div>
      <div className="container pt-4 pb-3 pt-lg-5 pb-lg-4">
        <div className="row pt-2 pt-lg-0">
          <div className="col-lg-3 pb-2 mb-4">
            <h3 className="h5 text-light mb-2">New way of renting a home</h3>
            <p className="fs-sm text-light opacity-70">
              Don’t miss any relevant offers!
            </p>
            <button
              onClick={() => router.push("/contact-us")}
              className="btn btn-primary w-80"
              type="submit"
            >
              Contact us
            </button>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-6 offset-xl-1 mb-2 mb-sm-4">
            <h3 className="fs-base text-light">Rental options</h3>
            <ul className="list-unstyled fs-sm">
              <li>
                <Link href="/our-plans">
                  <a className="nav-link-light">Our Plans</a>
                </Link>
              </li>
              <li>
                <Link href="/refer-earn">
                  <a className="nav-link-light">Refer &amp; Earn</a>
                </Link>
              </li>
              <li>
                <Link href="/reviews">
                  <a className="nav-link-light">Reviews</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-6 mb-2 mb-sm-4">
            <h3 className="fs-base text-light">About</h3>
            <ul className="list-unstyled fs-sm">
              <li>
                <Link href="/contact-us">
                  <a className="nav-link-light">Contact Us</a>
                </Link>
              </li>
              <li>
                <Link href="/about-us">
                  <a className="nav-link-light">About Us</a>
                </Link>
              </li>
              <li>
                <Link href="/faqs">
                  <a className="nav-link-light">FAQs</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-6 mb-2 mb-sm-4">
            <h3 className="fs-base text-light">Profile</h3>
            <ul className="list-unstyled fs-sm">
              <li>
                <Link href="/dashboard">
                  <a className="nav-link-light">My account</a>
                </Link>
              </li>
              <li>
                <Link href="/dashboard">
                  <a className="nav-link-light">My listings</a>
                </Link>
              </li>
              <li>
                <Link href="/dashboard">
                  <a className="nav-link-light">Wishlist</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-xl-2 col-lg-3 col-sm-6 col-md-3 mb-2 mb-sm-4">
            <a className="d-flex align-items-center text-decoration-none mb-2"></a>
            <a
              className="d-flex align-items-center text-decoration-none mb-2"
              href="mailto:example@email.com"
            >
              <i className="fi-mail me-2" />
              <span className="text-light">sales@rokye.com</span>
            </a>
            <div className="d-flex flex-wrap pt-4">
              <Link href="https://www.facebook.com/rokyerealty">
                <a
                  target="_blank"
                  className="btn btn-icon btn-translucent-light btn-xs rounded-circle mb-2 me-2"
                >
                  <i className="fi-facebook" />
                </a>
              </Link>
              <Link href="https://twitter.com/rokyerealty">
                <a
                  target="_blank"
                  className="btn btn-icon btn-translucent-light btn-xs rounded-circle mb-2 me-2"
                >
                  <i className="fi-twitter" />
                </a>
              </Link>
              <Link href="https://www.instagram.com/rokyerealty/">
                <a
                  target="_blank"
                  className="btn btn-icon btn-translucent-light btn-xs rounded-circle mb-2 me-2"
                >
                  <i className="fi-instagram" />
                </a>
              </Link>
              <Link href="/">
                <a
                  target="_blank"
                  className="btn btn-icon btn-translucent-light btn-xs rounded-circle mb-2"
                >
                  <i className="fi-youtube" />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container d-lg-flex align-items-center justify-content-between fs-sm pb-3">
        <div className="d-flex flex-wrap justify-content-center order-lg-2 mb-3">
          <Link href="/terms">
            <a className="nav-link nav-link-light fw-normal">Terms of use</a>
          </Link>
          <Link href="/privacy-policy">
            <a className="nav-link nav-link-light fw-normal">Privacy policy</a>
          </Link>
          <Link href="/blogs">
            <a className="nav-link nav-link-light fw-normal">Blogs</a>
          </Link>
        </div>
        <p className="text-center text-lg-start order-lg-1 mb-lg-0">
          <span className="text-light opacity-50">
            © All rights reserved @ 2022{" "}
          </span>
          <Link href="http://www.rokye.com">
            <a
              className="nav-link-light fw-bold"
              target="_blank"
              rel="noopener"
            >
              {" "}
              Rokye Realty LLP
            </a>
          </Link>
        </p>
      </div>
    </footer>
  );
}
