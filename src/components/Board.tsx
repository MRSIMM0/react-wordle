import React from "react";
import injectSheet from "react-jss";
import Tile from "./Tile";
import { TileType } from "./types/TilesTypes";
const style = {
  main: {
    display: "flex",
    "width":"100%",
    "justify-content":"center",
    "gap":"2%"
  },
};

type props = {
  classes: any;
  word:Array<String>;
};

function Board<props>({...props}) {

    const tiles = props.word.map((el:String) => {
        return <Tile type={TileType.Word} letter={el}></Tile>
    }); 


  return (
    <div className={props.classes.main}>
        {tiles}
    </div>
  );
}

export default injectSheet(style)(Board);
