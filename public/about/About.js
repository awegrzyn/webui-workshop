import {Observable, RemoteData} from '/js/src/index.js';

export default class About extends Observable {
  
  constructor(model) {
    super();
    this.model = model;

    this.data = RemoteData.notAsked();
    this.requestedTimes = 0;
  }

  /**
   * @return {JSON}
   */
  async requestData() {
    this.data = RemoteData.loading();
    this.notify();

    const {result, ok} = await this.model.loader.get('/api/getData');
    
    if (!ok) {
      this.data = RemoteData.failure(result);
    } else {
      this.data = RemoteData.success(result);
    }
    this.requestedTimes++;
    this.notify();
  }
}