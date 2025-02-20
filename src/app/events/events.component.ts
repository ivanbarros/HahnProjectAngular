import { Component, OnInit, inject } from '@angular/core';
import { NgFor, AsyncPipe} from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [NgFor,AsyncPipe],
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  private http = inject(HttpClient);
  public events$: Observable<any> | undefined;

  ngOnInit(): void {
    this.events$ = this.getEvents();
  }

  public getEvents(): Observable<any> {
    return this.http.get('https://localhost:7105/api/Recipies');
  }
}
