import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs/internal/observable/throwError';
import { catchError } from 'rxjs/internal/operators/catchError';
import { ArtistInformation } from 'src/app/models/artist-information';
import { ArtistsService } from 'src/app/services/artists.service';

@Component({
  selector: 'app-artist-detail',
  templateUrl: './artist-detail.component.html',
  styleUrls: ['./artist-detail.component.scss']
})
export class ArtistDetailComponent implements OnInit {
  @Input() set artistName(value: string){
    value && typeof value === 'string' ? this.setArtist(value) : null
  }
  artist$: Observable<ArtistInformation>;
  isArtist:boolean = false;
  isError:boolean = false;
  baseUrl:string = 'https://www.theaudiodb.com/api/v1/json/1/search.php?s=';

  constructor(private _artistsService: ArtistsService) { }

  ngOnInit(): void {
  }

  setArtist(artist){
    this.isError = false;
    this.isArtist = true;
    const urlArtist = `${this.baseUrl}${artist}`;
    this.artist$ = this._artistsService.getArtistInfo(urlArtist).pipe(
      catchError(err => {
        this.isError = true;
        return throwError(err);
      })
    )
  }

}
