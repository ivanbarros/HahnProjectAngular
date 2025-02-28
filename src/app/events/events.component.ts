import { Component, OnInit, inject } from '@angular/core';
import { NgFor, AsyncPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { Pipe, PipeTransform } from '@angular/core';
import { formatDate } from '@angular/common';
import { forwardRef } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
registerLocaleData(localePt);

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [NgFor, AsyncPipe, forwardRef(() => FormatDateBRPipe), CommonModule, FormsModule], // Add FormsModule here
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  private http = inject(HttpClient);
  public events$: Observable<any> | undefined;
  showImage: boolean = true;
  private _filterList: string = '';

  public get filterList(): string {
    return this._filterList;
   }

  public set filterList(value: string) {
    this._filterList = value;
    this.events$ = this.filterList ? this.filteredEvents(this.filterList) : this.getEvents();
  }
  filteredEvents(filterBy: string): Observable<any> {
  filterBy = filterBy.toLocaleLowerCase();
  return this.getEvents().pipe(
    map((events: any[]) => events.filter(event =>
      event.title.toLocaleLowerCase().includes(filterBy) ||
      event.location.toLocaleLowerCase().includes(filterBy)
    ))
  );
}
  ngOnInit(): void {
    this.events$ = this.getEvents();
  }


  changeImage() {
    this.showImage = !this.showImage;
  }

  public getEvents(): Observable<any> {
    return this.http.get('https://localhost:7105/api/Events');
  }
}

@Pipe({
  name: 'formatDateBR'
})
export class FormatDateBRPipe implements PipeTransform {
  transform(value: any): string {
    if (!value) return '';
    return formatDate(value, 'dd/MM/yyyy', 'pt-BR');
  }
}
