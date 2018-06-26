import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { Subscription } from 'rxjs';
import { Post } from '../models/Post.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  @Input() arrayposts: Post[] = [];
  @Input() isEmpty: boolean;
  postSubscription: Subscription;
  @Input() isLoading: boolean;

  constructor(private postsService: PostsService, private router: Router) {
      
  }

  ngOnInit() {
  	this.postSubscription = this.postsService.postsSubject.subscribe(
  		(posts: Post[]) => {
  			this.arrayposts = posts;
  			if(this.arrayposts.length > 0)
  				this.isEmpty = false;
  			else if(this.arrayposts.length <= 0)
  				this.isEmpty = true;
  			
        this.router.navigate(['/posts']);
  		}
  	);

  	this.postsService.emitPostSubject();

  }

  goPost()
  {
    this.router.navigate(['/new']);
  }

  ngOnDestroy()
  {
  	this.postSubscription.unsubscribe();
  }

}
