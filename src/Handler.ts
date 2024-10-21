import { MultimediaComponent } from './MultimediaComponent';

export class Handler {
  onPlayAudio(components: MultimediaComponent[]): void {
    components.forEach((component) => component.playAudio());
  }

  onStopAudio(components: MultimediaComponent[]): void {
    components.forEach((component) => component.stopAudio());
  }

  onPlayVideo(components: MultimediaComponent[]): void {
    components.forEach((component) => component.playVideo());
  }

  onStopVideo(components: MultimediaComponent[]): void {
    components.forEach((component) => component.stopVideo());
  }

  onInitComponents(components: MultimediaComponent[]): void {
    components.forEach((component) => component.init());
  }

  onDestroyComponents(components: MultimediaComponent[]): void {
    components.forEach((component) => component.destroy());
  }
}
