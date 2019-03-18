import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/providers/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  cartelera: any;

  constructor(public _ps:PeliculasService) {
      this._ps.getCartelera().subscribe(data=>{
          this.cartelera=data;
          console.log(this.cartelera)
      });
  }

  ngOnInit() {
  }

}
