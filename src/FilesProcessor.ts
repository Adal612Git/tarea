import { File } from './File';

export class FilesProcessor {
  openFiles(files: File[], mode?: 'read' | 'write'): void {
    files.forEach((file) => {
      file.open(mode);
    });
  }
}
