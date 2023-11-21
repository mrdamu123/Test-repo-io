import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../Model/Project';
import { Tag } from '../Model/tag';
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  project:Project={
    id:0,
    name:'ASP.Net',
    summary: 'Asp.Net Application',
    description: 'Asp.Net Application',
    projectLink: 'Https://',
    pictures: [''],
    tags: [Tag.CSHARP,Tag.ASPNET],
  }
  constructor (private titleService:Title ){
    this.titleService.setTitle("Jerripothu Damodar- Portfolio");
  }
}
