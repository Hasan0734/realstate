import React, { useEffect, useState } from "react";
import { GridLoader } from "react-spinners";
import { getData, getUserData } from "../../../../__lib__/helpers/HttpService";
import ContactsCard from "./ContactsCard";

const AllContacts = () => {
  const [loading, setLoading] = useState(true);
  const [color, setColor] = useState("#27d37f");
  const [contacts, setContacts] = useState({isLoading: true, dataList: []});

  useEffect(() => {
    getData("/contacts").then((res) => setContacts({isLoading: false, dataList: res}));
  }, []);

  return (
    <secttion>
      <div className="row">
        {contacts.dataList?.length > 0 ? (
          contacts.dataList?.map((cont, i) => <ContactsCard setContacts={setContacts}  key={i} data={cont} />)
        ) : (
          <div className="p-4">
            <div className="d-flex justify-content-center align-items-center">
              <h4>Contacts not found</h4>
            </div>
          </div>
        )}
        {
          contacts.isLoading && (
            <div className="p-4">
            <div className="d-flex justify-content-center align-items-center">
              <GridLoader color={color} loading={loading} size={8} />
            </div>
          </div>
          )
        }
      </div>
    </secttion>
  );
};

export default AllContacts;
