import React from 'react'
import injectSheet from "react-jss";

const style = {
  main: {
    "font-size":"3em",
    "color":"#4C9F70",
    "font-weight":"bold",
  },
};

type props = {
  classes: any;
};
function Victory({...props}) {
  return (
    <div className={props.classes.main}>Victory!</div>
  )
}

export default injectSheet(style)(Victory);
