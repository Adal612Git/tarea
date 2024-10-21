export class File {
  name: string;
  size: number;

  constructor(name: string, size: number) {
    this.name = name;
    this.size = size;
  }

  open(mode: 'read' | 'write' = 'read'): void {
    console.log(`Opening file: ${this.name}`);
    console.log(`Initiating ${mode} mode`);
  }
}
