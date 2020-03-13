import {Observable} from '/js/src/index.js';

export default class About extends Observable {
  
  constructor(model) {
    super();
    this.model = model;

    this.data = {};
    this.requestedTimes = 0;
  }

  /**
   * @return {JSON}
   */
  async requestData() {
    const {result, ok} = await this.model.loader.get('/api/getData');
    
    this.data = result;
    this.requestedTimes++;
    this.notify();
  }
}