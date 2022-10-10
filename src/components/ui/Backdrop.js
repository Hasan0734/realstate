import React from "react";
import styles from "./Backdrop.module.css"

const Backdrop = (props) => {
    const {show, clicked} = props;
    return show ? (
      <div
        className={styles.backdrop}
        onClick={clicked}
      ></div>
    ) : null;
  };
  
  export default Backdrop;