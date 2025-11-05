import { File } from './File';

export class TextFile extends File {
  open(mode: 'read' | 'write' = 'read'): void {
    super.open(mode);

    console.log('Loading text content...');
  }

  protected canBeOpenedInWriteMode(): boolean {
    return this.size < 1024;
  }
}
