import { Component, Input, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  @Input() postTitre: string;
  @Input() postContenu: string;
  @Input() postLoveIts: number;
  @Input() postDate: Date;
  @Input() index: number;  

  constructor(private postsService: PostsService) {}
  ngOnInit() {
   
  }

  onLove()
  {
    //this.postLoveIts = this.postLoveIts+1;
    this.postsService.lovePlus(this.index);
  	
  }
  onHate()
  {
    //this.postLoveIts = this.postLoveIts-1;
    this.postsService.loveMoins(this.index);
  	
  }

  onRemove()
  {
    this.postsService.removePost(this.index);
  }

}
