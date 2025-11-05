import { Component } from './Component';
import { AudioControl } from './AudioControl';
import { VideoControl } from './VideoControl';

export class MediaPlayer extends Component implements AudioControl, VideoControl {
  constructor() {
    super();

    console.log('MediaPlayer created');
  }

  init(): void {
    super.init();
    console.log('Multimedia resources initialized');
  }

  destroy(): void {
    console.log('Multimedia resources released');
    super.destroy();
  }

  playAudio(): void {
    console.log('MediaPlayer plays audio');
  }

  stopAudio(): void {
    console.log('MediaPlayer stops audio');
  }

  playVideo(): void {
    console.log('MediaPlayer plays video');
  }

  stopVideo(): void {
    console.log('MediaPlayer stops video');
  }
}
