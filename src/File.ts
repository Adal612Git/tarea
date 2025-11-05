export class File {
  name: string;
  size: number;

  constructor(name: string, size: number) {
    this.name = name;
    this.size = size;
  }

  open(mode: 'read' | 'write' = 'read'): void {
    console.log(`Opening file: ${this.name}`);

    const finalMode = mode === 'write' && this.canBeOpenedInWriteMode() ? 'write' : 'read';

    console.log(`Initiating ${finalMode} mode`);
  }

  protected canBeOpenedInWriteMode(): boolean {
    return false;
  }
}
