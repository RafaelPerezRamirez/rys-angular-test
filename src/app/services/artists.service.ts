import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { switchMap, catchError } from 'rxjs/operators';
import { ArtistInformation } from '../models/artist-information';

@Injectable({
  providedIn: 'root'
})
export class ArtistsService {

  constructor(private _http: HttpClient) { }

  getArtistInfo(url:string){
    return this._http.get(url).pipe(
      switchMap(response => {
        const entities = new ArtistInformation(response)
        return of(entities)
      }),
      catchError(err =>{
        throw 'error in source. Details: ' + err;
      })
    )
  }
}
