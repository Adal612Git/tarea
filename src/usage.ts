import { TextFile } from './TextFile';
import { ImageFile } from './ImageFile';
import { FilesProcessor } from './FilesProcessor';

const filesProcessor = new FilesProcessor();
const files = [new TextFile('text.txt', 1024), new ImageFile('image.jpg', 2048)];

filesProcessor.openFiles(files);
filesProcessor.openFiles(files, 'read');
filesProcessor.openFiles(files, 'write');
