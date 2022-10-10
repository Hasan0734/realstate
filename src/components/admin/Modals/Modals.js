import React, { useEffect, useRef } from "react";

const Modals = ({trigger, setTrigger, children, size}) => {
const ref = useRef()
useEffect(()=> {
    // const checkOutSideClick = (e) =>{
    //   if (ref.current && !ref.current.contains(e.target)) {
    //     setTrigger(false)
    //   }
    // } 
    // document.addEventListener('click', checkOutSideClick);
    // return () => {
    //   document.removeEventListener('click', checkOutSideClick)
    // }
})

  return (
    <>
      <div
      
        className={`modal fade ${trigger ? 'show': ''}`}
        id="addNewCard"
        tabIndex={-1}
        aria-labelledby="addNewCardTitle"
        style={{ display: `${trigger ? 'block': 'none'}`, background: '#000000a3', transition: 'all 0.5s'}}
        aria-hidden="true"
      >
        <div ref={ref} className={`modal-dialog modal-dialog-centered ${size}`}>
          <div className="modal-content">
            <div className="modal-header bg-transparent">
              <button
              onClick={() => setTrigger(false)}
                type="button"
                className="btn-close" 
                aria-label="Close"
              />
            </div>
            <div className="modal-body px-sm-5 mx-30 pb-5">
                {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modals;
