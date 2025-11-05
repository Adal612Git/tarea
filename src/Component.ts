export abstract class Component {
  init(): void {
    console.log('Component initialized');
  }

  destroy(): void {
    console.log('Component destroyed');
  }
}
