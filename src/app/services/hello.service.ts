import { Injectable, OnInit } from '@angular/core';
import { Web3Service } from './web3.service';

declare let require: any;
declare let window: any;

const helloAbi = require('../../ethereum/build/Hello.json');


const address = '0x88AEcec568c27E0f943dA13e964092498d5b31D8';

@Injectable()
export class HelloService {
  private web3: any;
  private helloInstance: any;

  constructor(private web3Service: Web3Service) {
    this.web3 = web3Service.web3;
    this.helloInstance = new this.web3.eth.Contract(
      JSON.parse(helloAbi.interface),
      address
    );
  }

  public async getMessage() {
    try {
      const message = await this.helloInstance.methods.getMessage().call();
      return message;
    } catch (error) {
      console.log(error);
    }
  }

  public async setMessage(message: string) {
    const acounts = await this.web3.eth.getAccounts();
    await this.helloInstance.methods.setMessage(message).send(
      {
        from: acounts[0]
      }
    );
  }

}
