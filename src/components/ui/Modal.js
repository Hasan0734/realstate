import { X } from "react-feather";
import styles from "./Modal.module.css";
import ClipLoader from 'react-spinners/ClipLoader'
const Modal = (props) => {
  const { show, title, close, save, disable } = props;
  return (
    <>
      {show && (
        <div
          className={styles.modal}
          //   className="modal fade"
          id="exampleModalCenter"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          //   aria-hidden="true"
        >
          <div  style={{minWidth: '315px'}} className="modal-dialog modal-dialog-centered" role="document">
            <div
              className="modal-content"
              style={{ overflowY: "scroll", height: "600px" }}
            >
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">
                  {title}
                </h5>
                <button
                  type="button"
                  className="btn btn"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={close}
                >
                  <span aria-hidden="true">
                    <X />
                  </span>
                </button>
              </div>
              <div className="modal-body">{props.children}</div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                  onClick={close}
                >
                  Close
                </button>
                {!disable ? (
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={save}
                  >
                    Save
                  </button>
                ) : (
                  <button disabled className="btn btn-primary">
                    <ClipLoader color={"black"} loading={true} size={18} />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
