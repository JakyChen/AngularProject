import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { HttpModule } from '@angular/http';

//Import the new components made
import { AppComponent } from './app.component';
import { UserComponent } from './components/user.component';
import { AboutComponent } from './components/about.component';

//Importing routing list
import { routing } from './app.routing';

@NgModule({
  //Declare every new component made so that they're usable in the project
  declarations: [
    AppComponent,
    UserComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    //Importing the route list from const 'routing' in app.routing.ts
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
