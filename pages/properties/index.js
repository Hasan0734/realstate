import Layout from "../../src/components/client/layout";
import FilterSidebar from "../../src/components/client/properties/FilterSidebar";
import MainContent from "../../src/components/client/properties/MainContent";
import { getData } from "../../__lib__/helpers/HttpService";

export default function Properties({ properties }) {
  return (
    <Layout>
      <div className="container-fluid mt-5 pt-5 p-0">
        <div className="row g-0 mt-n3">
          {/* Filters sidebar (Offcanvas on mobile)*/}
          <FilterSidebar  />
          {/* Page content*/}
          <MainContent properties={properties} />
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  const properties = await getData("/properties");
  return {
    props: {
      properties: properties || [],
    },
  };
}
