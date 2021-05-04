import P5 from 'p5';

export default class Sketch extends P5 {
  constructor() {
    super(() => {}, document.querySelector('div#sketch') as HTMLElement);
  }
}
