import { Component, OnInit } from '@angular/core';
import { ContentfulService } from './contentful.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-cms';

  constructor(private contentfulService: ContentfulService) {}
  ngOnInit() {}
}
