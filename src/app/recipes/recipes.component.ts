import { Component, OnInit, inject } from '@angular/core';
import { NgFor, AsyncPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [NgFor, AsyncPipe],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.scss'
})
export class RecipesComponent implements OnInit {
  private http = inject(HttpClient);
  public recipes$!: Observable<any>;

  ngOnInit(): void {
    this.recipes$ = this.getRecipes();
  }

  private getRecipes(): Observable<any> {
    return this.http.get('https://localhost:7105/api/Recipies');
  }
}
