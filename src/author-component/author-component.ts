import { Component,inject } from '@angular/core';
import {AuthorService} from '../author-service';
import {Author} from '../author';
import {Subscription} from 'rxjs';
@Component({
  selector: 'app-author-component',
  imports: [],
  templateUrl: './author-component.html',
  styleUrl: './author-component.css',
})
export class AuthorComponent {
  private authorService = inject(AuthorService);
  authors: Author[] = [];
  errorMessage = '';
  private sub?: Subscription;

  ngOnInit(): void {
    // .subscribe() is what actually fires the HTTP GET request
    this.sub = this.authorService.getAllAuthor().subscribe({
      next: (data) => this.authors = data,
      error: (err) => this.errorMessage = 'Could not load students. Please try again.'
    });
  }

  ngOnDestroy(): void {
    // prevent a memory leak if the component is destroyed before the call completes
    this.sub?.unsubscribe();
  }

  onloaddata()
  {
    this.sub = this.authorService.getAllAuthor().subscribe({
      next: (data) => this.authors = data,
      error: (err) => this.errorMessage = 'Could not load students. Please try again.'
    });
  }


}
