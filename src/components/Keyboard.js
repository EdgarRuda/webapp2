import { play } from "./tone.js";
import { Frequency } from 'tone';
import React, { useEffect } from 'react';



const generateNoteNames = (numNotes, octave =2) => {
  const noteNames = [];
  let note = `C${octave}`;
  for (let i = 0; i < numNotes; i++) {
    noteNames.push(note);
    note = Frequency(note).transpose(1).toNote();
  }
  console.log(noteNames);
  return noteNames;
  
};

const assignKeyChars = () => {
  const keyChars = 'awsedftgyhujkolp;\\';
  return keyChars.split('');
};

const notes = generateNoteNames(12); // Generate 12 notes dynamically
const keyChars = assignKeyChars();

export function Keyboard() {
  const renderKeys = () => {
    return notes.map((note, index) => {
      const keyClassName = note.includes('#') ? 'black-key' : 'white-key';
      return (
        <div key={note} className={keyClassName} onClick={() => play(`${note}`)}>
          {keyChars[index]}
        </div>
      );
    });
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      const keyPressed = event.key;
      const index = keyChars.indexOf(keyPressed);
      if (index !== -1 && index<12) {
        play(`${notes[index]}`);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [keyChars, notes]);



  return (
    <div className="pianoPage">
      <div className="piano">
        {renderKeys()}
      </div>
    </div>
  );
}