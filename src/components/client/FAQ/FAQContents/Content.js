import { useState } from "react";
import { ownerContents, referContents, tenantContents } from "./contentData";


const Content = () => {
  const [isActive, setIsActive] = useState("owner")
  return (
    <>
      <section className="container mb-md-5 mb-4 pb-lg-5">
        <div className="row">
          {/* Sidebar offcanvas*/}
          <aside className="col-xl-2 col-lg-3">
            <div
              className="offcanvas offcanvas-start offcanvas-collapse"
              id="help-sidebar"
            >
              <div className="offcanvas-header shadow-sm mb-2">
                <h2 className="h5 mb-0">FAQ</h2>
                <button
                  className="btn-close"
                  type="button"
                  data-bs-dismiss="offcanvas"
                />
              </div>
              <div className="offcanvas-body">
                <ul className="nav nav-tabs navbar-nav flex-column m-0 text-lg-center">
                  <li className="nav-item px-0">
                    <a className={`nav-link px-3 ${isActive === 'owner' ? "active": ""}`} onClick={() => setIsActive('owner')} href="#">
                      For Owners
                    </a>
                  </li>
                  <li className="nav-item px-0">
                    <a className={`nav-link px-3 ${isActive === 'tenant' ? "active": ""}`} onClick={() => setIsActive('tenant')} href="#">
                      For Tenants
                    </a>
                  </li>
                  <li className="nav-item px-0">
                    <a className={`nav-link px-3 ${isActive === 'referral' ? "active": ""}`} onClick={() => setIsActive('referral')} href="#">
                      For Referrals
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </aside>
          {/* Content For Owners*/}
          {isActive === 'owner' && <div className={`col-lg-9 offset-xl-1 col-lg-8`}>
            {ownerContents.map((content, i) => (
              <div key={content.id} className="pb-md-2">
                <h3 className="h5">
                  {content.title}
                </h3>
                <p>
                  {content.description}
                </p>
              </div>
            ))}

          </div>}


          {/* Content  For Tenants*/}
          {isActive === 'tenant' && <div className={`col-lg-9 offset-xl-1 col-lg-8`}>
            {tenantContents.map((content, i) => (
              <div key={content.id} className="pb-md-2">
                <h3 className="h5">
                  {content.title}
                </h3>
                <p>
                  {content.description}
                </p>
              </div>
            ))}
          </div>}
          {/* Content  For Referral*/}

          {isActive === 'referral' && <div className={`col-lg-9 offset-xl-1 col-lg-8`}>
            {referContents.map((content, i) => (
              <div key={content.id} className="pb-md-2">
                <h3 className="h5">
                  {content.title}
                </h3>
                <p>
                  {content.description}
                </p>
              </div>
            ))}
          </div>}

        </div>
      </section>
    </>
  );
};

export default Content;
