import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { CardsComponent } from './cards/cards.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { FormsModule } from '@angular/forms';
import { LittleCardComponent } from './little-card/little-card.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateComponent } from './update/update.component';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    CardsComponent,
    NotfoundComponent,
    LittleCardComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
