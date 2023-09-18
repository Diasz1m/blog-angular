import { Component } from '@angular/core';
import { PostService } from '../services/post.service';
import { Post } from '../interfaces/post';

type orientation = 'asc' | 'desc';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {

  
  posts!: Post[];
  
  constructor(private postService: PostService) {
    this.posts = [
      {
        id: 1,
        titulo: 'Post 1',
        texto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, voluptatibus.',
        user_id: 1
      },
      {
        id: 2,
        titulo: 'Post 2',
        texto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, voluptatibus.',
        user_id: 1
      }
    ];
  }


  getPosts() {
    return this.postService.getPosts().subscribe((res: any) => {
      //TODO aq vai setar os posts no array de posts
      res ? this.posts = res : this.posts = [];
    });
  }

  getPostsByDate(orientation: orientation) {
    return this.postService.getPostsByDate(orientation).subscribe((res: any) => {
      //TODO aq vai setar os posts no array de posts
      res ? this.posts = res : this.posts = [];
    });
  }


}
