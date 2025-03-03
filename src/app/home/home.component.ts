import { Component } from '@angular/core';
import { PostService } from '../services/post.service';
import { Post } from '../interfaces/post';

type orientation = 'asc' | 'desc';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: []
})

export class HomeComponent {

  
  posts!: Post[];
  
  constructor(private postService: PostService) {
    this.getPosts();
  }


  getPosts() {
    return this.postService.getPosts().subscribe((res: any) => {
      //TODO aq vai setar os posts no array de posts
      res ? this.posts = res : this.posts = [{user_id: 1, title: 'TESTE', content: 'TESTE', id: 1}];
      console.table(this.posts);
    });
  }

  getPostsByDate(orientation: orientation) {
    return this.postService.getPostsByDate(orientation).subscribe((res: any) => {
      //TODO aq vai setar os posts no array de posts
      res ? this.posts = res : this.posts = [];
    });
  }


}
