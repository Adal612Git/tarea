export abstract class MultimediaComponent {
  init(): void {
    console.log('Component initialized');
  }
  destroy(): void {
    console.log('Component destroyed');
  }
  abstract playAudio(): void;
  abstract stopAudio(): void;
  abstract playVideo(): void;
  abstract stopVideo(): void;
}
