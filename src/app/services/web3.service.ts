import Web3 from 'web3';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

declare let require: any;
declare let window: any;

declare var process: {
  env: {
    NODE_ENV: string
  }
};

@Injectable()
export class Web3Service {
  public web3: any;
    constructor() {
      if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
        // We are in the browser and metamask is running.
        this.web3 = new Web3(window.web3.currentProvider);
      } else {
        // We are on the server *OR* the user is not running metamask
        const provider = new Web3.providers.HttpProvider(
          environment.infuraUrl
        );
        this.web3 = new Web3(provider);
      }
    }
}




