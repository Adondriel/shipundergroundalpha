import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Comment } from '../models/comment.model';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private apiUrl = `api/comment`;

  constructor(private http: HttpClient) { }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      return of(result as T);
    };
  }

  getComments(profId: any): Observable<Comment[]> {
    const url = `${this.apiUrl}/${profId}`;
    return this.http.get<Comment[]>(url).pipe(
      tap(_ => console.log(`fetched comments for profId=${profId}`)),
      catchError(this.handleError<Comment[]>(`getComments profId=${profId}`))
    );
  }
}
