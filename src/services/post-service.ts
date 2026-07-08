import { Service,inject } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Post} from '../post';

@Service()
export class PostService {

 http:HttpClient=inject(HttpClient);
 baseURL:string="https://jsonplaceholder.typicode.com/posts";

 getAllPost():Observable<Post[]>{

   return  this.http.get<Post[]>(this.baseURL)

 }


}
