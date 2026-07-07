import {Component, inject} from '@angular/core';
import {PostService} from '../services/post-service';
import {HttpClient} from '@angular/common/http';
import {Post} from '../post';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-post-component',
  imports: [],
  templateUrl: './post-component.html',
  styleUrl: './post-component.css',
})
export class PostComponent {


  postservice:PostService=inject(PostService);
  posts:Post[]=[];
  errormsg:string="";
  sub?:Subscription;
  ngOnInit():void{
     console.log("ngOnInit");
    this.sub=this.postservice.getAllPost().subscribe({
      next:posts => {this.posts=[...this.posts,...posts];},
      error: error => this.errormsg = "Something went wrong"
    })

  }




  ngOnDestroy():void{
    this.sub?.unsubscribe();
  }

  loaddata()
  {
      this.postservice.getAllPost().subscribe({
        next:posts => {this.posts=posts;console.log(this.posts);},
        error: error => this.errormsg = "Something went wrong"
      })
  }


}
