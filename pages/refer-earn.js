import Layout from "../src/components/client/layout";
import HowWorks from "../src/components/client/ReferAndEarn/HowWorks";
import AskQuestion from "../src/components/client/ReferAndEarn/AskQuestion";
import ReferAndEarnForm from "../src/components/client/ReferAndEarn/ReferAndEarnForm";
import { useSelector } from "react-redux";
import Link from "next/link";

const Refers = () => {
  const { users } = useSelector((state) => state);
  return (
    <Layout>
      <div>
        <section className="container my-5 pt-lg-5 pt-4 pb-lg-5">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb pt-3 mb-4">
              <li className="breadcrumb-item">
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Refer &amp; Earn
              </li>
            </ol>
          </nav>
          <div className="row gy-4 overflow-hidden">
            <div className="col-md-6">
              <img
                className="rounded-3"
                src="img/rokye-website/refer.png"
                alt="Cover"
              />
            </div>
            {/* Refer form */}
            <ReferAndEarnForm />
          </div>
        </section>
        {/* works section */}
        <HowWorks />
        {/* Question section */}
        <AskQuestion />
      </div>
    </Layout>
  );
};

export default Refers;
