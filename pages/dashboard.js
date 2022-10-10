import Layout from "../src/components/client/layout";
import PersonalInfo from "../src/components/client/dashboard/AccountInfo/PersonalInfo";
import MyListings from "../src/components/client/dashboard/MyListing/MyListings";
import Wishlists from "../src/components/client/dashboard/Wishlists/Wishlists";
import AddBlog from "../src/components/client/dashboard/AddBlog";
import AccountHeader from "../src/components/client/dashboard/AccountHeader";
import { userAuth } from "../__lib__/helpers/requireAuthentication";
import AccountNav from "../src/components/client/dashboard/AccountNav";
import Link from "next/link";

const Dashboard = () => {

  return (
    <Layout>
      
      {/* Page container*/}
      <div className="container mt-5 mb-md-4 py-5">
        {/* Breadcrumbs*/}
        <nav className="mb-4 pt-md-3" aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
            <Link href="/">
             <a >Home</a>
             </Link>
            </li>
            <li className="breadcrumb-item">
            <Link href="/dashboard">
            <a >Account</a>
             </Link>
             
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Personal info
            </li>
          </ol>
        </nav>
        {/* Account header*/}
        <AccountHeader/>
        {/* Page content*/}
        <div className="card card-body p-4 p-md-5 shadow-sm">
          {/* Account nav*/}
            <AccountNav/>
          <div className="tab-content">
            {/* Personal info */}
            <PersonalInfo />

            {/* My listings*/}
            <MyListings />
            {/* My Wishlist*/}
            <Wishlists/>
            {/* ----------------------Add blog section-------------------------------- */}
            {/* <AddBlog/> */}
           
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
export const getServerSideProps = userAuth((context) => {
  return {
    props: {},
  };
});
