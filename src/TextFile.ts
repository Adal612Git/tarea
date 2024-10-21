import { File } from './File';

export class TextFile extends File {
  open(mode: 'write' | 'read' = 'write'): void {
    super.open(mode);

    console.log('Loading text content...');
  }
}
