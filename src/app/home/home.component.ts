import { Component } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './app/home/home.html',
})
export class HomeComponent {

  date = new Date();
  year:number = this.date.getFullYear();
  month:number = this.date.getMonth() + 1;
  day:number = this.date.getDate();
  age:number = (this.year - 1991);
  
  constructor(){
    if( this.month < 9 || this.month == 9 && this.day < 18 ){
     this.age--;
    }
    console.log('[home.component]');
  }

}