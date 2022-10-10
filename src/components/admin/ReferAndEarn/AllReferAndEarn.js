import React, { useEffect, useState } from "react";
import { GridLoader } from "react-spinners";
import { getData, getUserData } from "../../../../__lib__/helpers/HttpService";
import ReferEarnCard from "./ReferEarnCard";

const AllReferAndEarn = () => {
  const [refers, setRefers] = useState({isLoading: true, dataList: []});
  const [loading, setLoading] = useState(true);
  const [color, setColor] = useState("#27d37f");

  useEffect(() => {
    getData("/refers").then((res) => setRefers({isLoading: false, dataList: res}));
  }, []);

  return (
    <secttion>
      <div className="row">
        {refers.dataList.length > 0 ? (
          refers.dataList?.map((refer, i) => <ReferEarnCard setRefers={setRefers}  refer={refer} key={i} />)
        ) : (
          <div className="p-4">
            <div className="d-flex justify-content-center align-items-center">
              <h4>Refer not abailable</h4>
            </div>
          </div>
        )}
        {refers.isLoading && (
          <div className="p-4">
          <div className="d-flex justify-content-center align-items-center">
            <GridLoader color={color} loading={loading} size={8} />
          </div>
        </div>
        )}
      </div>
    </secttion>
  );
};

export default AllReferAndEarn;
