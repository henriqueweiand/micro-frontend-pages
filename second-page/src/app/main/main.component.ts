import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main',
  templateUrl: './index.html',
})
export class MainComponent implements OnInit {
  public products: Array<any>;

  constructor() {}

  ngOnInit() {
    this.products = [
      { url: '/first', src: '/static/images/dummy.jpg' },
      { url: '/first', src: '/static/images/dummy.jpg' },
      { url: '/first', src: '/static/images/dummy.jpg' },
      { url: '/first', src: '/static/images/dummy.jpg' },
      { url: '/first', src: '/static/images/dummy.jpg' },
      { url: '/first', src: '/static/images/dummy.jpg' },
      { url: '/first', src: '/static/images/dummy.jpg' },
      { url: '/first', src: '/static/images/dummy.jpg' },
    ];
  }
}