import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BitcoreComponent } from './bitcore/bitcore.component';
import { GqlComponent } from './gql/gql.component';

@NgModule({
  declarations: [
    AppComponent,
    BitcoreComponent,
    GqlComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
