import { Component } from '@angular/core';
import { Post } from 'src/app/interfaces/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: []
})
export class PostComponent {
  posts:Post[] = [];
  constructor(private service: PostService) { }

  getPosts() {

    const res = this.service.getPosts();

    if(res)
    {
      console.table(res);
      // this.posts = res.data;
    }
  }
  getPostId(id: number)
  {
    return this.service.getPostById(id).subscribe((res: any) => {
      //TODO aq vai a logica de redirecionamento para a pagina do post      
      console.log(res);
    });
  }

}
