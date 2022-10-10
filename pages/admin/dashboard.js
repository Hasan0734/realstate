import { adminAuth } from "../../__lib__/helpers/requireAuthentication";
import AdminLayout from "./../../src/components/admin/AdminLayout/AdminLayout";

const Dashboard = (props) => {
  return (
    <AdminLayout>
      <h1>Comming soooon!!!</h1>
    </AdminLayout>
  );
};

export default Dashboard;
export const getServerSideProps = adminAuth((context) => {
  return {
    props: {},
  };
});

