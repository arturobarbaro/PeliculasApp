import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/providers/peliculas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: []
})
export class BuscarComponent implements OnInit {

  buscar:string = "";

  constructor(public _ps:PeliculasService,
              public router:ActivatedRoute) {
    this.router.params.subscribe(params=>{
        console.log(params);
        if(params['texto']){
            this.buscar=params['texto'];
            this.buscarPelicula();
        }
    });
  }

  ngOnInit() {
  }

  buscarPelicula(){
      if(this.buscar.length>0){
        this._ps.buscarPelicula(this.buscar).subscribe();
      }
  }

}
