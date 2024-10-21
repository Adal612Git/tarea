import { MultimediaComponent } from './MultimediaComponent';

export class MediaPlayer extends MultimediaComponent {
  constructor() {
    super();

    console.log('MediaPlayer created');
  }

  init() {
    super.init();
    console.log('Multimedia resources initialized');
  }

  destroy() {
    console.log('Multimedia resources released');
    super.destroy();
  }

  playAudio() {
    console.log('MediaPlayer plays audio');
  }

  stopAudio() {
    console.log('MediaPlayer stops audio');
  }

  playVideo() {
    console.log('MediaPlayer plays video');
  }

  stopVideo() {
    console.log('MediaPlayer stops video');
  }
}
