import {Component} from '@angular/core';
import {PostService} from '../services/post.service';

@Component({
  moduleId: module.id,
  selector: 'user',
  templateUrl: 'user.component.html',
  providers: [PostService]
})

export class UserComponent {
  name: string;
  hobbies: string[];
  showHobbies: boolean;
  posts: Post[];

  constructor(private PostService: PostService){
    this.name = 'Jacky Chen';
    this.hobbies = ['Graphic', 'Software', 'Language'];
    this.showHobbies = false;

    //Since it getPost() function is returning an observable,
    //we have to subscribe 
    this.PostService.getPost().subscribe(posts => {
        this.posts = posts;
    })
  }

  toggleHobbies(){
    if(this.showHobbies == true){
      this.showHobbies = false;
    }else{
      this.showHobbies = true;
    }
  }

  addHobby(newHobby){
    this.hobbies.push(newHobby);
  }

  deleteHobby(i){
    this.hobbies.splice(i, 1);
  }
}

interface Post{
    id: number;
    title: string;
    body: string;
}