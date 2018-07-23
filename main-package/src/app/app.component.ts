import { Component, OnInit } from '@angular/core';
import { FooService } from 'proxy-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(
    private readonly loggerService: FooService,
  ) {
  }

  ngOnInit(): void {
    this.loggerService.foo();
  }

}
