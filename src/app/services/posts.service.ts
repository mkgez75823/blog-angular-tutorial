import { Injectable } from '@angular/core';
import { Post } from '../models/Post.model';
import * as firebase from 'firebase';
import DataSnapshot = firebase.database.DataSnapshot;
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable()
export class PostsService {
  
  posts: Post[] = [];

  

  postsSubject = new Subject<Post[]>();

  constructor(private httpClient: HttpClient) { 
    this.getPosts();
  }

  emitPostSubject()
	{
		this.postsSubject.next(this.posts.slice());

	}

  addPost(post: Post)
  {
    
    this.posts.push(post);
    this.savePosts();
    this.emitPostSubject();
  }

  lovePlus(i:number)
  {
  	this.posts[i].loveIts++;
    this.savePosts();
  	this.emitPostSubject();
  }

  loveMoins(i:number)
  {
  	this.posts[i].loveIts--;
    this.savePosts();
  	this.emitPostSubject();
  }

  removePost(i: number)
  {
    this.posts.splice(i, 1);
    this.savePosts();
    this.emitPostSubject();
  }

  savePosts()
  {
    firebase.database().ref('/posts').set(this.posts);

  }

  getPosts()
  {
    firebase.database().ref('/posts').on(
      'value', (data: DataSnapshot) => {
        this.posts = data.val() ? data.val() : [];
        this.emitPostSubject();
      });
    
  }


}
