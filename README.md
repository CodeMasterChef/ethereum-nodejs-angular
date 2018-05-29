# ethereum-nodejs-angular

Communicate with smart contracts on the Ethereum blockchain with Angular 5 and Web3 (0.18.4).

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.0.

# Installation:
Install packages with command:

`npm install`

Run web app with command:

`npm start`

Install Metamask Chrome extension and switch to Rinkeby.


# Complie smart constract: 

Move to **ethereum** folder and run command:

`node ./compile.js`

# Deploy smart constract:

Config Mnemonic env variable:

`$env:MNEMONIC='12 words of your mnemory'`

Config Infura URL env variable:

`$env:INFURA_URL="https://rinkeby.infura.io/yourgeneratedcode"`

Move to **ethereum** folder and run command:

`node ./deploy.js`


