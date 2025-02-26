import { Component, OnInit, inject } from '@angular/core';
import { NgFor, AsyncPipe} from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { Pipe, PipeTransform } from '@angular/core';
import { formatDate } from '@angular/common';
import { forwardRef } from "@angular/core";
import { CommonModule } from '@angular/common';
registerLocaleData(localePt);
@Component({
  selector: 'app-events',
  standalone: true,
  imports: [NgFor, AsyncPipe, forwardRef(() => FormatDateBRPipe),CommonModule],
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
