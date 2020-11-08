import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { FormComponent } from './components/form/form.component';
import {of} from 'rxjs';

@Component({
  selector: 'app-artist-search',
  templateUrl: './artist-search.component.html',
  styleUrls: ['./artist-search.component.scss']
})
export class ArtistSearchComponent implements OnInit {
  artistName: string;

  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit(){}
  
}
