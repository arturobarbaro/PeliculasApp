import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/providers/peliculas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styles: []
})
export class PeliculaComponent implements OnInit {

  pelicula:any;

  constructor(public _ps:PeliculasService,
              public router:ActivatedRoute) {
    this.router.params.subscribe(params=>{
        console.log(params);
        this._ps.getPelicula(params['id']).subscribe(pelicula=>{
            this.pelicula=pelicula;
        });
    });
  }

  ngOnInit() {
  }

}
