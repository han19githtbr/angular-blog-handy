import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ContentComponent } from './pages/content/content.component';
import { BigCardModule } from './components/big-card/big-card.module';
import { MenuBarModule } from './components/menu-bar/menu-bar.module';
import { MenuTitleModule } from './components/menu-title/menu-title.module';
import { SmallCardModule } from './components/small-card/small-card.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BigCardModule,
    MenuBarModule,
    MenuTitleModule,
    SmallCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
