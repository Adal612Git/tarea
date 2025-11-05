import { AudioPlayer } from './AudioPlayer';
import { Handler } from './Handler';
import { MediaPlayer } from './MediaPlayer';
import { VideoPlayer } from './VideoPlayer';

console.log('Create components...');
const audioComponent = new AudioPlayer();
const videoComponent = new VideoPlayer();
const mediaComponent = new MediaPlayer();

const handler = new Handler();

console.log('Init components...');
handler.onInitComponents(audioComponent, videoComponent, mediaComponent);

console.log('Play audio...');
handler.onPlayAudio(audioComponent, mediaComponent);

console.log('Stop audio...');
handler.onStopAudio(audioComponent, mediaComponent);

console.log('Play video...');
handler.onPlayVideo(videoComponent, mediaComponent);

console.log('Stop video...');
handler.onStopVideo(videoComponent, mediaComponent);

console.log('Destroy components...');
handler.onDestroyComponents(audioComponent, videoComponent, mediaComponent);
