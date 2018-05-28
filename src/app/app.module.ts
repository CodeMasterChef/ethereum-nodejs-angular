import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {HelloService} from './services/hello.service';
import { Web3Service } from './services/web3.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [HelloService , Web3Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
