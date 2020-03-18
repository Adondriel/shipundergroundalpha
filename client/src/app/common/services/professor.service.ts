import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Professor } from '../models/professor.model';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {
  private apiUrl = `api/professor`;

  constructor(private http: HttpClient) { }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      return of(result as T);
    };
  }

  getProfessors(): Observable<Professor[]> {
    return this.http.get<Professor[]>(this.apiUrl, {}).pipe(
      tap(article => console.log('fetched professors')),
      catchError(this.handleError('getProfessors', []))
    );
  }

  getProfessor(id: any): Observable<Professor> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Professor>(url).pipe(
      tap(_ => console.log(`fetched professor id=${id}`)),
      catchError(this.handleError<Professor>(`getProfessor id=${id}`))
    );
  }

}
