import { File } from './File';

export class ImageFile extends File {
  open(mode: 'read' | 'write' = 'read'): void {
    super.open(mode);

    console.log('Loading image content...');
  }
}
