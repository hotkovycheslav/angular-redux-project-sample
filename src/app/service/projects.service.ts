import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchByName } from '../components/filter-form/abstract-select-form/abstract-select-form.component';
import { Project } from '../components/filter-form/models/project.model';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ProjectsService implements SearchByName<Project> {

  private readonly API_URL = '/api/projects';

  constructor(private http: HttpClient) { }

  searchByName(name: string): Observable<Project[]> {
    return this.http.get<Project[]>(`${this.API_URL}`)
      .pipe(catchError((error: any) => throwError(error.error)));
  }

}
