import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategories } from "../../../../store/catrgories/actions";
import styles from "./BlogUPload.module.css";
import Select from "react-select";
import { setTags } from "../../../../store/tags/actions";
import "suneditor/dist/css/suneditor.min.css";
import dynamic from "next/dynamic";

const SunEditor = dynamic(() => import("suneditor-react"), {
  ssr: false,
});

const BlogUPload = (props) => {
  const { handleForm, handleFormData, images,setImages, selectedTag, setSelectedTag, isValid, setBody, body } =
    props;
  const dispatch = useDispatch();
  const { categories, tags } = useSelector((state) => state);
  const { categoryList } = categories;
  const { tagList } = tags;

  useEffect(() => {
    dispatch(setCategories());
    dispatch(setTags());
  }, []);

  const handleSelectTag = (e) => {
    setSelectedTag(e);
  };

  const tagsOption = tagList?.map((tag) => ({
    label: tag.tagName,
    value: tag.tagSlug,
  }));
  const { blogTitle, category, description } = handleFormData;
  return (
    <>
      <form>
        <div>
          <label className="form-label" htmlFor="blogTitle">
            Blog Title
          </label>
          <input
            type="text"
            id="blogTitle"
            name="blogTitle"
            placeholder="Enter your blog title ..."
            onChange={(e) => handleForm(e)}
            className="form-control"
          />
          {!blogTitle && isValid && isValid && (
            <span className="text-danger">Blog title requried</span>
          )}
        </div>

        <div className="mt-2">
          <label className="form-label" htmlFor="description">
            Blog Description
          </label>
          <SunEditor height="160px" onChange={(e) => setBody(e)} />
          {!body && isValid && (
            <span className="text-danger">Description requried</span>
          )}
        </div>

        <div className="mt-2">
          <label className="form-label" htmlFor="image">
            Upload photo
          </label>
          <input
            type="file"
            className={styles.input1}
            id="image"
            name="image"
            accept="image/png, image/gif, image/jpeg"
            onChange={(e) => setImages(e.target.files)}
          />
          {!images && isValid && (
            <span className="text-danger">Image requried</span>
          )}
        </div>
        <div>
          <label className={styles.selector} htmlFor="category">
            Category
          </label>
          <select
            disabled={categoryList.length > 0 ? false : true}
            className="form-select"
            onChange={(e) => handleForm(e)}
            id="category"
            name="category"
          >
            <option selected>Choice Category</option>
            {categoryList?.map((cate) => (
              <option key={cate._id} value={cate._id}>
                {cate.categoryName}
              </option>
            ))}
          </select>
          {!category && isValid && (
            <span className="text-danger">Selct category</span>
          )}
        </div>

        <div>
          <label className="form-label">Tag</label>
          <Select
            onChange={handleSelectTag}
            isMulti
            name="colors"
            options={tagsOption}
            className="basic-multi-select"
            classNamePrefix="select"
          />
          {!selectedTag && isValid && (
            <span className="text-danger">Tag requried</span>
          )}
        </div>
        {/* <input type="submit" className={[styles.input2, styles.input3]} value="Submit" /> */}
      </form>
    </>
  );
};

export default BlogUPload;
