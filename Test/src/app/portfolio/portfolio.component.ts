import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../Model/Project';
import { Tag } from '../Model/tag';
import { ProjectService } from '../Services/project.service';
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  projects:Project[]=[];
  constructor (private titleService:Title, private projectService:ProjectService ){
    this.titleService.setTitle("Jerripothu Damodar- Portfolio");
  }
  ngOnInit(): void {
    this.projectService.getProjectDetailsByHTTP().subscribe(data=>this.projects=data
       ); 
  }
}
