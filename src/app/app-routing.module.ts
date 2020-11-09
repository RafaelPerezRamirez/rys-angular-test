import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtistSearchComponent } from './sections/artist-search/artist-search.component';
import { SongListComponent } from './sections/song-list/song-list.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '', 
    component: AppComponent,
    children: [
      {path: 'artist', component: ArtistSearchComponent},
      {path: 'album-list/:artistName', component: SongListComponent},
      {path: '', redirectTo: '/artist', pathMatch: 'full'}
    ]
  },
  {path: '**', component: ArtistSearchComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
