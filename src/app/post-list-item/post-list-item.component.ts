import { Component, Input, OnInit } from '@angular/core';

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
  
  constructor() {
  }
  ngOnInit() {
  }

  onLove()
  {
    this.postLoveIts = this.postLoveIts+1;
  	
  }
  onHate()
  {
    this.postLoveIts = this.postLoveIts-1;
  	
  }

}
