import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import GridLoader from "react-spinners/GridLoader";
import { setCategories } from "../../../../store/catrgories/actions";
import { getData } from "../../../../__lib__/helpers/HttpService";
import CategoryModal from "./CategoryModal";
import CategoryTableList from "./CategoryTableList";

const CategoryTable = (props) => {
  const [trigger, setTrigger] = useState(false);
  const [loading, setLoading] = useState(true);
  const [color, setColor] = useState("#27d37f");
  const { categories } = useSelector((state) => state);
  const dispatch = useDispatch()
  const { categoryList } = categories;
  useEffect(() => {
    dispatch(setCategories())
  },[])
  return (
    <div>
      <CategoryModal setTrigger={setTrigger} trigger={trigger} />
      <div className="row" id="basic-table">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <div className="">
                <h4 className="card-title">Category Lists</h4>
              </div>
              <button
                onClick={() => setTrigger(true)}
                className="btn btn-primary"
              >
                Add Category
              </button>
            </div>
            {categoryList?.length > 0 && !categories?.isLoading ? (
              <div
                className="table-responsive"
                style={categoryList?.length < 5 ? { height: "300px" } : {}}
              >
                <table className="table">
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Name</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {categoryList?.map((cate, i) => (
                      <CategoryTableList key={i} data={cate} />
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="p-4">
                <div className="d-flex justify-content-center align-items-center">
                  {/* <GridLoader color={color} loading={loading} size={8} /> */}
                <h4>Category not available</h4>
                </div>
              </div>
            )}
            {
              categories.isLoading && <div className="p-4">
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

export default CategoryTable;
