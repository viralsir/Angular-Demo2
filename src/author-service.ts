import { Service,inject } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Author} from './author';

@Service()
export class AuthorService {

  http:HttpClient=inject(HttpClient);
  baseUrl:string="http://localhost:8000/author";

  getAllAuthor():Observable<Author[]>{
    return this.http.get<Author[]>(this.baseUrl);
  }
  //http://localhost:8000/author/1
  getAuthorById(id:number) : Observable<Author> {
    return this.http.get<Author>(`${this.baseUrl}/${id}`);
  }

  addAuthor(newAuthor: Author):Observable<Author> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post<Author>(this.baseUrl,newAuthor,{headers})
  }

  updateStudent(id: number, changes: Partial<Author>): Observable<Author> {
    return this.http.put<Author>(`${this.baseUrl}/${id}`, changes);
  }

  deleteStudent(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }



}


