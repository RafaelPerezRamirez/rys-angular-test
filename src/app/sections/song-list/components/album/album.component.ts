import { Component, Input, OnInit } from '@angular/core';
import { AlbumList } from 'src/app/models/album-list';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {
  @Input() album: AlbumList

  constructor() { }

  ngOnInit(): void {
  }

}
