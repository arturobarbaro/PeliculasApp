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



  getCartelera(){
      let desde = new Date();
      let hasta = new Date(desde.getDate()+7);
      let desdeStr=`${desde.getFullYear()}-${desde.getMonth()+1}-${desde.getDate()}`;
      let hastaStr=`${hasta.getFullYear()}-${hasta.getMonth()+1}-${hasta.getDate()}`;
      
      const url =`${this.urlMoviedb}/discover/movie?primary_release_date.gte=${desdeStr}&primary_release_date.lte=${hastaStr}&api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;
      return this._http.jsonp(url, '').pipe(map( (res: any) =>  res.results ));
  }

  getPopulares() {
      const url =`${this.urlMoviedb}/discover/movie?sort_by=popularity.desc&api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;
      return this._http.jsonp(url, '').pipe(map( (res: any) =>  res.results ));
  }

  buscarPelicula( texto:string ){

   let url = `${ this.urlMoviedb }/search/movie?query=${ texto }&sort_by=popularity.desc&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;

   return this._http.jsonp( url, '' ).pipe(
               map( res=> console.log(res))
           );
 }



}
