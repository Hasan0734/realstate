import { useEffect, useState } from "react";
import GridLoader from "react-spinners/GridLoader";
import { getData, getUserData } from "../../../../__lib__/helpers/HttpService";
import UserTableList from "./UserTableList";
import Cookies from "universal-cookie";


const UsersTable = (props) => {
  const cookies = new Cookies;
  const [loading, setLoading] = useState(true);
  const [color, setColor] = useState("#27d37f");
  const [users, setUsers] = useState({isLoading: true, userList: []})
  const admin = cookies.get('_admin')

  useEffect(() => {
    getUserData('/admin/users', admin.token)
    .then(res => setUsers({isLoading: false, userList: res}))

  }, []);

  return (
    <div>
      <div className="row" id="basic-table">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <div className="">
                <h4 className="card-title">User Lists</h4>
              </div>
              {/* <button
                onClick={() => setTrigger(true)}
                className="btn btn-primary"
              >
                Add Tag
              </button> */}
            </div>
            {users.userList?.length > 0 ? (
              <div
                className="table-responsive"
                style={users.userList?.length < 5 ? { height: "300px" } : {}}
              >
                <table className="table">
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.userList?.map((user, i) => (
                      <UserTableList setUsers={setUsers} key={i} user={user} />
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="p-4">
                <div className="d-flex justify-content-center align-items-center">
                  <h4>User not available</h4>
                </div>
              </div>
            )}
            {
              users.isLoading && <div className="p-4">
              <div className="d-flex justify-content-center align-items-center">
                <GridLoader color={color} loading={loading} size={8} />
                
              </div>
            </div>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersTable;
