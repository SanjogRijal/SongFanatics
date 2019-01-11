import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CreateArtistComponent } from './create-artist/create-artist.component';
import { CreateAlbumComponent } from './create-album/create-album.component';
import { CreateSongComponent } from './create-song/create-song.component';
const routes: Routes = [
	{path: '', component:MainpageComponent},
	{path: 'homepage', component:HomepageComponent},
	{path: 'createAlbum', component: CreateAlbumComponent},
	{path: 'createArtist', component: CreateArtistComponent},
	{path: 'createSong', component: CreateSongComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
