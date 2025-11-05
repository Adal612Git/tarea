import { Component, VideoControl } from './MultimediaComponent';

export class VideoPlayer extends Component implements VideoControl {
  constructor() {
    super();
    console.log('VideoPlayer created');
  }

  playVideo(): void {
    console.log('VideoPlayer plays video');
  }

  stopVideo(): void {
    console.log('VideoPlayer stops video');
  }
}
