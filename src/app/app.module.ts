import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FeaturedSongsComponent } from './featured-songs/featured-songs.component';

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    MainNavComponent,
    SignupComponent,
    HomeComponent,
    AboutComponent,
    SignUpComponent,
    FeaturedSongsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
