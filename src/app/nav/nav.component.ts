import { Component, OnInit } from '@angular/core';
import { IconComponent } from "../shared/icon/icon.component";


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  standalone: true,
  imports: [IconComponent]
})
export class NavComponent implements OnInit {
isCollapsed = true;
  constructor() { }

  ngOnInit() {
  }

}
