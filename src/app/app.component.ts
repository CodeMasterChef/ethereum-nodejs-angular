import { Component, OnInit } from '@angular/core';
import { HelloService } from './services/hello.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  message: string;
  inputMessage: string;
  notice = '';

  constructor(private helloService: HelloService) {
  }

  async ngOnInit() {
    this.message = await this.helloService.getMessage();
  }

  async onClickSetBtn(message) {
    this.notice = 'Please wait...';
    await this.helloService.setMessage(message);
    this.message = await this.helloService.getMessage();
    this.notice = 'Success';
  }
}
