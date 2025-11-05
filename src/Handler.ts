import { AudioControl } from './AudioControl';
import { Component } from './Component';
import { VideoControl } from './VideoControl';

export class Handler {
  onPlayAudio(...audioPlayers: AudioControl[]): void {
    audioPlayers.forEach((player) => player.playAudio());
  }

  onStopAudio(...audioPlayers: AudioControl[]): void {
    audioPlayers.forEach((player) => player.stopAudio());
  }

  onPlayVideo(...videoPlayers: VideoControl[]): void {
    videoPlayers.forEach((player) => player.playVideo());
  }

  onStopVideo(...videoPlayers: VideoControl[]): void {
    videoPlayers.forEach((player) => player.stopVideo());
  }

  onInitComponents(...components: Component[]): void {
    components.forEach((component) => component.init());
  }

  onDestroyComponents(...components: Component[]): void {
    components.forEach((component) => component.destroy());
  }
}
