import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//Components
import { ArtistSearchComponent } from './artist-search/artist-search.component';
import { SongListComponent } from './song-list/song-list.component';
import { ArtistDetailComponent } from './artist-search/components/artist-detail/artist-detail.component';
import { FormComponent } from './artist-search/components/form/form.component';
import { AlbumComponent } from './song-list/components/album/album.component';
//Routes
import { AppRoutingModule } from '../app-routing.module';
//Services
import { ArtistsService } from '../services/artists.service';
//Material
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';





@NgModule({
  declarations: [ArtistSearchComponent, SongListComponent, FormComponent, ArtistDetailComponent, AlbumComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatChipsModule,
    MatCardModule,
    AppRoutingModule
  ],
  exports: [
    ArtistSearchComponent, 
    SongListComponent
  ],
  providers: [ArtistsService]
})
export class SectionsModule { }
