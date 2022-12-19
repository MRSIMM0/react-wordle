import React from "react";
import injectSheet from "react-jss";
import Tile from "./Tile";
import { TileType } from "./types/TilesTypes";
const style = {
  main: {
    display: "flex",
    "width":"100%",
    "justify-content":"center",
    "height":"3rem",
    "align-items":"center"
  },
  button:{
    "display":"flex",
    "height":"100%",
    "background-color":"#888098",
    "width":"10em",
    "justify-content":"center",
    "align-items":"center",
    "border-radius":"0.6rem",
    "user-select":"none",
    '&:hover': {
        "opacity":"0.9",
        "cursor":"pointer"
    },
    '&:active':{
        "opacity":"1",
    }
  }

};

type props = {
  classes: any;
  click: Function
};


function Options({...props}) {
  return (
    <div className={props.classes.main}>

        <div onClick={()=>{props.click()}} className={props.classes.button}>
            Restart
        </div>

    </div>
  )
}
export default injectSheet(style)(Options);
