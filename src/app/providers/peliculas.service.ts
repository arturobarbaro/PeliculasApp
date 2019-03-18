import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private apikey:string ='f7776433121e7227c9372d7758c2039b';
  private urlMoviedb:string ='https://api.themoviedb.org/3';

  constructor(
      public _http:HttpClient
  ) { }

  getPopulares() {
      console.log('a')
      const url =`${this.urlMoviedb}/discover/movie?sort_by=popularity.desc&api_key=${this.apikey}$language=es&callback=JSONP_CALLBACK`;
      return this._http.jsonp(url, '').pipe(map( (res: any) =>  res.results ));
  }

  buscarPelicula( texto:string ){

   let url = `${ this.urlMoviedb }/search/movie?query=${ texto }&sort_by=popularity.desc&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;

   return this._http.jsonp( url, '' ).pipe(
               map( res=> console.log(res))
           );
 }



}
