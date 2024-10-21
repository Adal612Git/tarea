import { File } from './File';

export class ImageFile extends File {
  open(mode: 'read' | 'write' = 'read'): void {
    super.open();

    if (mode === 'write') {
      throw new Error('Image files can only be opened for reading');
    }

    console.log('Loading image content...');
  }
}
