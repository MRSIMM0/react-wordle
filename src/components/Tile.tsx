import { TileType } from "./types/TilesTypes";
import injectSheet from "react-jss";

//good - #4C9F70
//bad - #89023E
//wrongPlace - #FFFD98

const style = {
  main: {
    "font-family": "'Courier New', monospace",
    "font-weight": "bolder",
    width: "3em",
    "aspect-ratio": "1/1",
    "font-size": "2.5rem",
    display: "flex",
    "align-items": "center",
    "justify-content": "center",
    "border-radius": "20px",
    "user-select":"none"
  },
  blank: {
    display: "flex",
    width: "100%",
    "aspect-ratio": "1/1",
    "background-color": "#888098",
    "align-items": "center",
    "justify-content": "center",
    "border-radius": "15%",
  },

  word: {
    display: "flex",
    width: "100%",
    "aspect-ratio": "1/1",
    "align-content": "end",
  },
  good: {
    display: "flex",
    width: "100%",
    "aspect-ratio": "1/1",
    "background-color": "#4C9F70",
    "align-items": "center",
    "justify-content": "center",
    "border-radius": "15%",
  },
  bad: {
    display: "flex",
    width: "100%",
    "aspect-ratio": "1/1",
    "background-color": "#89023E",
    "align-items": "center",
    "justify-content": "center",
    "border-radius": "15%",
  },
  mix: {
    display: "flex",
    width: "100%",
    "aspect-ratio": "1/1",
    "background-color": "#FFFD98",
    "align-items": "center",
    "justify-content": "center",
    "border-radius": "15%",
  },
  line: {
    "background-color": "#A54657",
    width: "100%",
    height: "4px",
    "border-radius": "30px",
  },
};
type props = {
  classes: any;
  letter: String;
  type: TileType;
};

function Tile<props>({ ...props }) {
  if (props.type == TileType.Word) {
    return (
      <div className={props.classes.main}>
        <div className={props.classes.word}>
          <div className={props.classes.line}></div>
        </div>
      </div>
    );
  }

  if (props.type == TileType.Good) {
    return (
      <div className={props.classes.main}>
        <div className={props.classes.good}>{props.letter}</div>
      </div>
    );
  }

  if (props.type == TileType.Bad) {
    return (
      <div className={props.classes.main}>
        <div className={props.classes.bad}>{props.letter}</div>
      </div>
    );
  }

  if (props.type == TileType.Mix) {
    return (
      <div className={props.classes.main}>
        <div className={props.classes.mix}>{props.letter}</div>
      </div>
    );
  }
  return (
    <div className={props.classes.main}>
      <div className={props.classes.blank}>{props.letter}</div>
    </div>
  );
}
export default injectSheet(style)(Tile);
