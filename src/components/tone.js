import * as Tone from "tone";

export function play(note){
  const synth = new Tone.Synth().toDestination();
  synth.triggerAttackRelease(note, "8n");
}

export function playNote(event) {
  if (event.keyCode === 65) {
    play('C4');
  }
  if (event.keyCode === 87) {
    play('Db4');
  }
  if (event.keyCode === 83) {
    play('D4');
  }
  if (event.keyCode === 69) {
    play('Eb4');
  }
  if (event.keyCode === 68) {
    play('E4');
  }
}
