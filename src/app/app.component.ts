import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EventsComponent } from "./events/events.component";
import { RecipesComponent } from "./recipes/recipes.component";
import { HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from "./nav/nav.component";
import { CollapseModule } from 'ngx-bootstrap/collapse';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EventsComponent, RecipesComponent, NavComponent, CollapseModule],
  providers: [HttpClient, BrowserAnimationsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HahnAngular';
}

@NgModule({
  declarations: [
    // other components
  ],
  imports: [
    BrowserModule,
    CollapseModule.forRoot(),
    AppComponent,
    CommonModule,
    FormsModule
  ],
  providers: [],

})
export class AppModule { }
