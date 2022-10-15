import React, { useState, forwardRef, useImperativeHandle } from "react";
import "./Snackbar.css";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';


const Snackbar = forwardRef((props, ref) => {
  const [showSnackbar, setShowSnackbar] = useState(false);

  useImperativeHandle(ref, () => ({
    show() {
      setShowSnackbar(true);
      setTimeout(() => {
        setShowSnackbar(false);
      }, 2800);
    },
  }));
  return (
    <div
      className="snackbar"
      id={showSnackbar ? "show" : "hide"}
      style={{
        backgroundColor: props.type === "success" ? "white" : "#FF0033",
        
        border:'1px solid #7ED321',
        
       
      }}
    >
      <div className="symbol" >
      <CheckCircleOutlineIcon sx ={{color:'#7ED321'}}/>
      </div>
      <div className="message">{props.message}</div>
    </div>
  );
});

export default Snackbar;