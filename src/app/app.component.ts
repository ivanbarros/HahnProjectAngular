import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EventsComponent } from "./events/events.component";
import { RecipesComponent } from "./recipes/recipes.component";
import { HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@Component({
  selector: 'app-root',
  standalone : true,
  imports: [RouterOutlet, EventsComponent, RecipesComponent],
  providers: [HttpClient, BrowserAnimationsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'HahnAngular';
}
