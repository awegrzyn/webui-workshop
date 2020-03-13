import {Observable} from '/js/src/index.js';

export default class About extends Observable {
  
  constructor(model) {
    super();

    this.data = {};
    this.requestedTimes = 0;
  }

  /**
   * @return {JSON}
   */
  requestData() {
    this.data = {
      name: 'webui',
      version: '1.0.0',
      author: 'batman'
    };
    this.requestedTimes++;
    this.notify();
  }
}