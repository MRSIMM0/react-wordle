import { useState, useEffect } from "react";

import injectSheet from "react-jss";
import Guess from "./Guess";
import Options from "./Options";
import Victory from "./messages/Victory";
import Lose from "./messages/Lose";

async function getRandomLine() {
  let line = "";

  await fetch("https://mrsimm0.github.io/react-wordle/words.txt")
    .then((res: any) => res.text())
    .then((body: any) => {
      const lines = body.split("\n");
      line = lines[Math.round(Math.random() * (lines.length - 1))];
    });

  return line;
}

const style = {
  main: {
    overflow: "none",
    paddingTop: "30px",
    "background-color": "#344055",
    height: "97vh",
  },
  guesses: {
    opacity: 0.6,
  },
  line: {
    display: "block",
    height: "2px",
    width: "90%",
    "background-color": "black",
  },
  text: {
    display: "flex",
    "justify-content": "center",
  },
};

type props = {
  classes: any;
};

function MainView<props>({ ...props }) {
  const [quizWord, setWord] = useState(Array.from(""));

  const [guess, setGuess] = useState<Array<String>>(
    Array(quizWord.length).fill("")
  );
  const [guesses, setGuesses] = useState<Array<any>>([
    <Guess word={quizWord} guess={guess}></Guess>,
  ]);

  const [text, setText] = useState<any>("");

  useEffect(() => {
    (async () => {
      setWord(Array.from(await getRandomLine()));
      updateGuesses();
    })();
  }, []);

  const resetGame = async () => {
    setText("");
    setWord(Array.from(await getRandomLine()));
    setGuess(Array(quizWord.length).fill(""));
    setGuesses([<Guess word={quizWord} guess={guess}></Guess>]);
  };

  const isAlpha = function (ch: String) {
    return typeof ch === "string" && ch.length === 1 && /[A-Za-z]/.test(ch);
  };

  const updateGuesses = () => {
    let newGuess = guesses;
    newGuess.pop();
    newGuess.push(<Guess eval={false} word={quizWord} guess={guess}></Guess>);
    setGuesses([...newGuess]);
  };

  const handleGuess = (code: any) => {
    let position = guess.join("").length;
    if (text.length == 0) {
      if (position != 0 && code == "Backspace") {
        guess[position - 1] = "";
        setGuess([...guess]);
      }

      if (position < quizWord.length && isAlpha(code)) {
        guess[position] = code;
        setGuess(guess);
      }

      updateGuesses();

      if (position == quizWord.length && code == "Enter") {
        let newGuess = guesses;
        newGuess[newGuess.length - 1] = (
          <Guess eval={true} word={quizWord} guess={guess}></Guess>
        );

        if (guess.join() != quizWord.join()) {
          if (guesses.length != 5) {
            setGuess(Array(quizWord.length).fill(""));
            newGuess.push(
              <Guess
                eval={false}
                word={quizWord}
                guess={Array(quizWord.length).fill("")}
              ></Guess>
            );
          } else {
            setText(<Lose></Lose>);
          }
        } else {
          setText(<Victory></Victory>);
        }
        setGuesses([...newGuess]);
      }
    }
  };

  return (
    <div
      tabIndex={0}
      onKeyDown={(event) => {
        handleGuess(event.key);
      }}
      className={props.classes.main}
    >
      <Options click={resetGame}></Options>
      <div className={props.classes.guesses}>{guesses}</div>
      <div className={props.classes.text}> {text}</div>
    </div>
  );
}

export default injectSheet(style)(MainView);
