import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import GridLoader from "react-spinners/GridLoader";
import { setCategories } from "../../../../store/catrgories/actions";
import { setTags } from "../../../../store/tags/actions";
import { getData } from "../../../../__lib__/helpers/HttpService";
import CategoryModal from "./TagModal";
import TagTableList from "./TagTableList";
import CategoryTableList from "./TagTableList";

const TagTable = (props) => {
  const [trigger, setTrigger] = useState(false);
  const [loading, setLoading] = useState(true);
  const [color, setColor] = useState("#27d37f");
  const { tags } = useSelector((state) => state);
  const dispatch = useDispatch();
  const { tagList } = tags;
  useEffect(() => {
    dispatch(setTags());
  }, []);
  return (
    <div>
      <CategoryModal setTrigger={setTrigger} trigger={trigger} />
      <div className="row" id="basic-table">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <div className="">
                <h4 className="card-title">Tag Lists</h4>
              </div>
              <button
                onClick={() => setTrigger(true)}
                className="btn btn-primary"
              >
                Add Tag
              </button>
            </div>
            {tagList?.length > 0 ? (
              <div
                className="table-responsive"
                style={tagList?.length < 5 ? { height: "300px" } : {}}
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
                    {tagList?.map((cate, i) => (
                      <TagTableList key={i} data={cate} />
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
              tags.isLoading && <div className="p-4">
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

export default TagTable;
