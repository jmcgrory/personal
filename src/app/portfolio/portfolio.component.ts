import { Component, OnInit } from '@angular/core';
//import { Observable } from 'rxjs/Observable';
import { Port } from '../model/port';
import { PortService } from '../services/port.service';

@Component({
  templateUrl: './app/portfolio/portfolio.html',
})
export class PortfolioComponent  {

  ports: Port[];

  constructor(
    private portService: PortService
  ){
    console.log('[portfolio.component]');
  }

  getPorts(){
    this.portService.getPorts().subscribe(
      ports => this.ports = ports,
      err => {
        console.log(err);
    });
  }

  ngOnInit(){
    this.getPorts();
  }
}
