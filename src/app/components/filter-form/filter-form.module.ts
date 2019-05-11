import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterFormComponent } from './filter-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import {
  MatSelectModule, MatInputModule, MatFormFieldModule, MatButtonModule, MatAutocomplete,
  MatAutocompleteModule, MatChipsModule, MatIconModule
} from '@angular/material';
import { FILTER_ITEM_BUILDER, FilterItemFactory } from './factory/filter-item.factory';
import { ProjectBuilder, IssueTypeBuilder, AssigneeBuilder } from './builders/select.builders';
import { SearchStringItemBuilder } from './builders/input.builder';
import { AbstractSelectFormComponent } from './abstract-select-form/abstract-select-form.component';
import { AssigneeFormComponent } from './assignee-form/assignee-form.component';
import { UserService } from 'src/app/service/user.service';
import { ProjectFormComponent } from './project-form/project-form.component';

const BUILDERS = [
  { provide: FILTER_ITEM_BUILDER, useClass: SearchStringItemBuilder, multi: true },
  { provide: FILTER_ITEM_BUILDER, useClass: ProjectBuilder, multi: true },
  { provide: FILTER_ITEM_BUILDER, useClass: IssueTypeBuilder, multi: true },
  { provide: FILTER_ITEM_BUILDER, useClass: AssigneeBuilder, multi: true }
]

@NgModule({
  declarations: [FilterFormComponent, AbstractSelectFormComponent, AssigneeFormComponent, ProjectFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatChipsModule,
    MatIconModule
  ],
  providers: [
    BUILDERS,
    FilterItemFactory
  ],
  exports: [FilterFormComponent]
})
export class FilterFormModule { }
