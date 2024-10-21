# Applying the ISP

The goal of this task is to assess your ability to apply the ISP in TypeScript programming.

Duration: *30 minutes*

## Description

You are provided with TypeScript code representing a simple media player system.

The system currently has a `MultimediaComponent` abstract class that is extended by the `MediaPlayer` class. The `MultimediaComponent` class has methods to play audio, play video, stop audio, stop video, initialize, and destroy components.

This design violates the ISP since a new class representing a multimedia component should not use methods it does not need. To ensure each interface defines a cohesive set of functionalities, the code needs to be refactored, and separate interfaces might need to be created for different functionalities.

## Requirements

1) Identify the parts of the code that violate the ISP. The `MultimediaComponent` class should not contain methods that are not applicable to all classes that implement it.

2) Refactor the code to adhere to the ISP. Break down the `MultimediaComponent` class into three parts:
   - The `AudioControl` interface should have methods for playing and stopping audio.
   - The `VideoControl` interface should have methods for playing and stopping video.
   - The `Component` class should have methods for initializing and destroying components.

3) Create `AudioPlayer` and `VideoPlayer` classes that implement the designed interfaces accordingly.

4) Update the `Handler` class to handle the `AudioPlayer` and `VideoPlayer` classes separately. The handler methods should accept the new interfaces as parameters instead of the `MultimediaComponent` class.

5) After refactoring, the code should still perform its original function and correctly handle multimedia components.

## Examples

Below is an example of a code violation and how it could be refactored.

Violation:
The `MultimediaComponent` class has methods for both audio and video playback as well as initializing and destroying components. This violates the ISP as not every multimedia component can play both audio and video and needs to be initialized and destroyed.

Original code:

```typescript
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
```

Refactoring:
Break down the `MultimediaComponent` class into `AudioControl` and `VideoControl` interfaces, and `Component` class. In addition, you need to change the methods of the `Handler` class accordingly.

Refactored code:

```typescript
interface AudioControl {
  // ...
}

interface VideoControl {
  // ...
}

abstract class Component {
  // ...
}

class Handler {
  onPlayAudio(audioPlayers: AudioControl[]) {
    // ...
  }
  onStopAudio(audioPlayers: AudioControl[]) {
    // ...
  }
  onPlayVideo(videoPlayers: VideoControl[]) {
    // ...
  }
  onStopVideo(videoPlayers: VideoControl[]) {
    // ...
  }
  onInitComponents(components: Component[]) {
    // ...
  }
  onDestroyComponents(components: Component[]) {
    // ...
  }
}
```

Below is an example of how the media player system should work after refactoring and updating:

```typescript
console.log("Create components...");
const audioComponent = new AudioPlayer();
const videoComponent = new VideoPlayer();
const mediaComponent = new MediaPlayer();

const handler = new Handler();

console.log("Init components...");
handler.onInitComponents(audioComponent, videoComponent, mediaComponent);

console.log("Play audio...");
handler.onPlayAudio(audioComponent, mediaComponent);

console.log("Stop audio...");
handler.onStopAudio(audioComponent, mediaComponent);

console.log("Play video...");
handler.onPlayVideo(videoComponent, mediaComponent);

console.log("Stop video...");
handler.onStopVideo(videoComponent, mediaComponent);

console.log("Destroy components...");
handler.onDestroyComponents(audioComponent, videoComponent, mediaComponent);
```

A sample output is shown below:

```txt
Create components...
AudioPlayer created
VideoPlayer created
MediaPlayer created
Init components...
Component initialized
Component initialized
Component initialized
Multimedia resources initialized
Play audio...
AudioPlayer plays audio
MediaPlayer plays audio
Stop audio...
AudioPlayer stops audio
MediaPlayer stops audio
Play video...
VideoPlayer plays video
MediaPlayer plays video
Stop video...
VideoPlayer stops video
MediaPlayer stops video
Destroy components...
Component destroyed
Component destroyed
Multimedia resources released
Component destroyed
```

Below is an example of a class diagram after refactoring:

![This image can be found in the project repository. File: diagram.png](diagram.png)
