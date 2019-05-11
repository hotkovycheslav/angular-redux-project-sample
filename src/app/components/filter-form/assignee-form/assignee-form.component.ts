import { Component, OnInit } from '@angular/core';
import { AbstractSelectFormComponent, SEARCH_BY_NAME } from '../abstract-select-form/abstract-select-form.component';
import { UserService } from 'src/app/service/user.service';
import { ControlContainer } from '@angular/forms';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-assignee-form',
  templateUrl: './assignee-form.component.html',
  styleUrls: ['./assignee-form.component.css'],
  providers: [
    { provide: SEARCH_BY_NAME, useClass: UserService }
  ]
})
export class AssigneeFormComponent extends AbstractSelectFormComponent<User> {
}
