import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app/app.html',
})
export class AppComponent  {

  menu:Array<any>;

  constructor(){
    this.menu = [
      { title: 'Home', link: '/home', img: '' },
      { title: 'Portfolio', link: '/portfolio', img: '' },
      { title: 'Skills', link: '/skills', img: '' },
      { title: 'Blog', link: '/blog', img: '' },
      { title: 'Contact', link: '/contact', img: '' }
    ];
  }
}