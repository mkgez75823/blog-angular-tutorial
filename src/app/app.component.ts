import { Component } from '@angular/core';
import { Post } from './post-list-item/Post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  texte: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  
  pos1 = new Post("Premier post", this.texte, 0);
  pos2 = new Post("Deuxième post", "Texte à venir", 0);
  pos3 = new Post("Troisième post", this.texte, 0);
  
  posts = [
  	this.pos1, this.pos2, this.pos3
  ];
  title = "l\'exercice \"blog Angular\"";
}
