import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

 
  title = "l\'exercice \"blog Angular\"";

  constructor()
  {
  	const config = {
	    apiKey: "AIzaSyBUBmEx13OFFuRh9F5uKVt82PBytzKE8dU",
	    authDomain: "blog-ang.firebaseapp.com",
	    databaseURL: "https://blog-ang.firebaseio.com",
	    projectId: "blog-ang",
	    storageBucket: "",
	    messagingSenderId: "175619461142"
  	};
  	firebase.initializeApp(config);

  }
}
