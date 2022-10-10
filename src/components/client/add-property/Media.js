import { useEffect, useState } from "react";
import { Image, X } from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import { setMedia, setRemoveMedia } from "../../../../store/property/actions";

function Media({ isValid }) {
  const dispatch = useDispatch();
  const { property } = useSelector((state) => state);
  const { media } = property;
  const [selectedImages, setSelectedImages] = useState([]);

  const handleImages = (e) => {
    if (e.target.files.length > 0) {
      const newUrl = [...selectedImages];
      for (let i = 0; i < e.target.files.length; i++) {
        const element = e.target.files[i];
        dispatch(setMedia(element));
        newUrl.push(URL.createObjectURL(element));
      }
      setSelectedImages(newUrl);
    }
  };

  useEffect(() => {
    window.onbeforeunload = function() {
      dispatch(setRemoveMedia([]))
        return true;
    };

    return () => {
        window.onbeforeunload = null;
    };
}, []);

  return (
    <div className="bg-light rounded-3 p-4 p-md-5 mb-3">
      <h2 className="h4 mb-4">
        <i className="fi-image text-primary fs-4 mt-n1 me-2 pe-1" />
        Photos
      </h2>
      <div className="row">
        <div className="col-sm-12 mb-4">
          <div className="alert alert-info mb-4" role="alert">
            <div className="d-flex">
              <i className="fi-alert-circle me-2 me-sm-3" />
              <p className="fs-sm mb-1">
                The maximum photo size is 8 MB. Formats: jpeg, jpg, png. Put the
                main picture first
              </p>
            </div>
          </div>
          <label className="btn btn-primary py-3" htmlFor="image">
            <Image size={25} alt="image"/>
            {"  "}
            Upload Image
          </label>
          <input
            className="file-uploader file-uploader-grid d-none"
            type="file"
            onChange={(e) => handleImages(e)}
            multiple={true}
            id="image"
            accept="image/png, image/gif, image/jpeg"
          />
          <div className="mt-3">
            <ul className="list-unstyled d-flex py-2 flex-wrap">
              {selectedImages?.map((image, i) => (
                <li key={i} className="position-relative p-2">
                  <img
                    className="rounded-md"
                    style={{ height: "120px" }}
                    src={image}
                    alt="Thumbnail"
                  />
                  <button
                    onClick={() => {
                      const newArray = selectedImages.filter(
                        (img, index) => i !== index
                      );
                      const newArray2 = media.propertyImage.filter(
                        (img, index) => index !== i
                      );
                      setSelectedImages(newArray);
                      dispatch(setRemoveMedia(newArray2));
                    }}
                    style={{ right: "4%" }}
                    className="btn btn-danger px-2 py-1 position-absolute"
                  >
                    <X />
                  </button>
                </li>
              ))}
            </ul>
          </div>
          {!media.propertyImage ||
            (!media.propertyVideo && isValid && (
              <div className="text-danger"> Image is required</div>
            ))}
        </div>
      </div>
    </div>
  );
}
export default Media;
