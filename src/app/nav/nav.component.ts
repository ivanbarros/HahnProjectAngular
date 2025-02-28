import { Component, OnInit } from '@angular/core';
import { IconComponent } from "../shared/icon/icon.component";
import { CollapseModule } from 'ngx-bootstrap/collapse';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  standalone: true,
  imports: [IconComponent, CollapseModule]
})
export class NavComponent implements OnInit {

  isCollapsed = true;
  constructor() { }

  ngOnInit() {
  }

}
