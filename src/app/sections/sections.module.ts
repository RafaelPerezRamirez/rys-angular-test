import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistSearchComponent } from './artist-search/artist-search.component';
import { SongListComponent } from './song-list/song-list.component';
import { FormComponent } from './artist-search/components/form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ArtistDetailComponent } from './artist-search/components/artist-detail/artist-detail.component';
import { ArtistsService } from '../services/artists.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [ArtistSearchComponent, SongListComponent, FormComponent, ArtistDetailComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    ArtistSearchComponent, 
    SongListComponent
  ],
  providers: [ArtistsService]
})
export class SectionsModule { }
