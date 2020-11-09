import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { switchMap, catchError, tap, map } from 'rxjs/operators';
import { AlbumList } from '../models/album-list';
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

  getAlbums(url:string){
    return this._http.get(url).pipe(
      switchMap((response:any) => {
        const entities = response.album.map(album => new AlbumList(album))
        return of(entities)
      }),
      catchError(err =>{
        throw 'error in source. Details: ' + err;
      })
    )
  }
}
