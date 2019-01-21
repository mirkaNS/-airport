export class HasNoLicence extends Error {
    constructor(message) {
      super();
      this.message = message || 'The pilot does not have a license, please call the police!';
    }
  }