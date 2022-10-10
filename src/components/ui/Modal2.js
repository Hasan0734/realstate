import styles from "./Modal.module.css";
const Modal2 = (props) => {
  const {
    show,
    title,
    close,
    save,
    handleSubmit,
    onSubmit,
    onError,
    register,
  } = props;
  return (
    <>
      {show && (
        <div
          className={`modal fade ${show && "show"}`}
          id="editUser"
          tabIndex={-1}
          style={{ display: "block" }}
          aria-modal="true"
          role="dialog"
        >
          <div className="modal-dialog modal-lg modal-dialog-centered modal-edit-user">
            <div className="modal-content">
              <div className="modal-header bg-transparent">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={close}
                />
              </div>
              <div className="modal-body pb-5 px-sm-5 pt-50">
                <div className="text-center mb-2">
                  <h1 className="mb-1">{title}</h1>
                  {/* <p>Updating user details will receive a privacy audit.</p> */}
                </div>
                {props.children}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal2;
