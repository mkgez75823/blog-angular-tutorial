import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { PostsService } from '../services/posts.service';
import { Post } from '../models/post.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  postForm: FormGroup;


  constructor(private formBuilder: FormBuilder, private postsService: PostsService, private router: Router) { }

  ngOnInit() {
  	this.initForm();
  }

  initForm()
  {
  	this.postForm = this.formBuilder.group(
  	{
  		titre: ['', Validators.required ],
    	contenu: ['', Validators.required ]
  	});
  }

  onSubmitForm()
  {
    const formValue = this.postForm.value;
    const newPost = new Post(
      formValue['titre'],
      formValue['contenu'],
      0
    );
    this.postsService.addPost(newPost);
    this.router.navigate(['/posts']);
  }

}
