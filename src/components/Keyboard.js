import { play, playNote } from "./tone.js";

window.addEventListener("keydown", playNote);

export function Keyboard() {
  return (
    <div className="pianoPage">
      <div className="piano">
        <div className="white-key" onClick={() => play("C4")}>
          A
        </div>
        <div className="black-key" onClick={() => play("Db4")}>
          W
        </div>
        <div className="white-key" onClick={() => play("D4")}>
          S
        </div>
        <div className="black-key" onClick={() => play("Eb4")}>
          E
        </div>
        <div className="white-key" onClick={() => play("E4")}>
          D
        </div>
      </div>
    </div>
  );
}
