export interface AudioControl {
  playAudio(): void;
  stopAudio(): void;
}

export interface VideoControl {
  playVideo(): void;
  stopVideo(): void;
}

export abstract class Component {
  init(): void {
    console.log('Component initialized');
  }

  destroy(): void {
    console.log('Component destroyed');
  }
}
