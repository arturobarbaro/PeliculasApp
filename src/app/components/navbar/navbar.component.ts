import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [`
      a{
          color: white
      }
      `]
})
export class NavbarComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }

  buscarPelicula(texto:string){
      if(texto.length>0){
          this.router.navigate(['buscar',texto]);
      }
  }

}
