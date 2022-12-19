import { useEffect, useState } from "react";
import injectSheet from "react-jss";
import Tile from "./Tile";
import { TileType } from "./types/TilesTypes";
const style = {
  main: {
    display: "flex",
    height: "100%",
    "justify-content": "center",
    gap: "2%",
    "margin-top": "20px",
  },
};

type props = {
  classes: any;
  word: Array<String>;
  guess: Array<String>;
  eval: Boolean;
};

function Guess<props>({ ...props }) {


  let word = [...props.word];
  let guess = [...props.guess];

  const tiles = props.guess.map((el: String) => {

    if (props.eval) {


      
      if (word.indexOf(el) == -1) {
        return <Tile type={TileType.Bad} letter={el}></Tile>;
      }

      if (guess.indexOf(el) == word.indexOf(el)) {
       
        word[word.indexOf(el)] = "";
        guess[guess.indexOf(el)] = "";

        return <Tile type={TileType.Good} letter={el}></Tile>;
      }
      return <Tile type={TileType.Mix} letter={el}></Tile>;
    } else {
      return <Tile type={TileType.Guess} letter={el}></Tile>;
    }
  });

  return <div className={props.classes.main}>{tiles}</div>;
}

export default injectSheet(style)(Guess);
