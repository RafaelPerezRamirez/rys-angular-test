import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumList } from 'src/app/models/album-list';
import { ArtistsService } from 'src/app/services/artists.service';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.scss']
})
export class SongListComponent implements OnInit {
  artistName: string = this._Activatedroute.snapshot.paramMap.get('artistName');
  baseUrl: string = 'https://www.theaudiodb.com/api/v1/json/1/searchalbum.php?s='
  albumList: AlbumList;

  constructor(
    private _Activatedroute:ActivatedRoute,
    private _artistsService: ArtistsService
  ) { }

  ngOnInit(): void {
    this.getAlbums(this.artistName);
  }
  getAlbums(artist: string){
    const urlAlbums = `${this.baseUrl}${artist}`;
    this._artistsService.getAlbums(urlAlbums).subscribe(elem => this.albumList = elem);
  }

}
