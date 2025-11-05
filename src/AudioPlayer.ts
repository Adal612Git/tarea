import { Component } from './Component';
import { AudioControl } from './AudioControl';

export class AudioPlayer extends Component implements AudioControl {
  constructor() {
    super();
    console.log('AudioPlayer created');
  }

  playAudio(): void {
    console.log('AudioPlayer plays audio');
  }

  stopAudio(): void {
    console.log('AudioPlayer stops audio');
  }
}
