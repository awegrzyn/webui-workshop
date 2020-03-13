import  {Observable} from '/js/src/index.js';

/**
 * Model representing handlers for homePage.js
 */
export default class Home extends Observable {
  /**
   * @param {Object} model 
   */
  constructor(model) {
    super();
    this.model = model;

    this.userName = '';
  }

  /**
   * @return {string}
   */
  getUserName() {
    return this.userName === '' ? 'No username identified' : this.userName;
  }

  /**
   * @param {string} name 
   */
  setUserName(name) {
    this.userName = name;
    this.notify();
  }
}