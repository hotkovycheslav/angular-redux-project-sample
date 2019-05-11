import { Component, OnInit } from '@angular/core';
import { AbstractSelectFormComponent, SEARCH_BY_NAME } from '../abstract-select-form/abstract-select-form.component';
import { ProjectsService } from 'src/app/service/projects.service';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css'],
  providers: [
    { provide: SEARCH_BY_NAME, useClass: ProjectsService }
  ]
})
export class ProjectFormComponent extends AbstractSelectFormComponent {
}
