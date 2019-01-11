import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { ReactiveFormsModule,FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FeaturedSongsComponent } from './featured-songs/featured-songs.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FooterComponent } from './footer/footer.component';
import { DashNavComponent } from './dash-nav/dash-nav.component';
import { CreateAlbumComponent } from './create-album/create-album.component';
import { CreateArtistComponent } from './create-artist/create-artist.component';
import { CreateSongComponent } from './create-song/create-song.component';

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    MainNavComponent,
    SignupComponent,
    HomeComponent,
    AboutComponent,
    SignUpComponent,
    FeaturedSongsComponent,
    HomepageComponent,
    FooterComponent,
    DashNavComponent,
    CreateAlbumComponent,
    CreateArtistComponent,
    CreateSongComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
