import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PersonComponent } from './person/person.component';
import { TablaUnoComponent } from './tabla-uno/tabla-uno.component';
import { TablaDosComponent } from './tabla-dos/tabla-dos.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    TablaUnoComponent,
    TablaDosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
