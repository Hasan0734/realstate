import dateFormat from "dateformat";
import { useState } from "react";
import toast from "react-hot-toast";
import Cookies from "universal-cookie";
import { getData, removeData } from "../../../../__lib__/helpers/HttpService";


const ContactsCard = ({ data, setContacts }) => {
  const [disable, setDisable] = useState(false);

  const cookies = new Cookies();
  const hanndleRemove = async (id) => {
    setDisable(true);
    const admin = await cookies.get('_admin')
    removeData(`/admin/contact/${id}`, admin.token)
      .then(res => {
        if (res.success) {
          getData('/contacts')
            .then(res => setContacts({ isLoading: false, dataList: res }))
            setDisable(false);
          toast.success(res.message);
        } else {
          toast.error(res.error)
          setDisable(false);
        }
      })
  }

  return (
    <div className="col-12">
      <div className="card mb-4">
        <div className="card-body">
          <div className="mb-1">
            <div className="d-flex justify-content-between">
              <h6 className="text-success py-1">{data.role}</h6>

              <h6 className="text-warning py-1">
                {dateFormat(data.createdAt, "mmm d, yyyy")}
              </h6>
            </div>
            <div className="d-flex justify-content-between">
              <div>
                <h4 className="card-subtitle text-uppercase">{data.name}</h4>
                <p className="mb-0">Phone: {data.phone}</p>
                <p className="mb-0">Email: {data.email}</p>
                <p className="card-text">{data.message}</p>
              </div>
              <div>
                <button
                  onClick={() => hanndleRemove(data._id)}
                  className="btn btn-danger"
                  disabled={disable}
                  >
                  Remove
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactsCard;
