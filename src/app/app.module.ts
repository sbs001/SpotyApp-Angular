import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistComponent } from './components/artist/artist.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { CardComponent } from './components/card/card.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { AlertComponent } from './components/alert/alert.component';

//routes
import { ROUTES } from './app.routes';

//routes
import { SpotifyService } from './services/spotify.service';

//pipes
import { NoImgPipe } from './pipes/no-img.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistComponent,
    NavbarComponent,
    NoImgPipe,
    DomseguroPipe,
    CardComponent,
    LoadingComponent,
    AlertComponent,
  ],
  imports: [
    BrowserModule, 
    HttpClientModule,
    RouterModule.forRoot(ROUTES, { useHash: true })
  ],
  providers: [
    SpotifyService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
