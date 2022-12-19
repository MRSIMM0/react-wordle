import React from 'react'
import injectSheet from "react-jss";

const style = {
  main: {
    "font-size":"3em",
    "color":"#89023E",
    "font-weight":"bold",
  },
};

type props = {
  classes: any;
};
function Lose({...props}) {
  return (
    <div className={props.classes.main}>Lose :C</div>
  )
}

export default injectSheet(style)(Lose);