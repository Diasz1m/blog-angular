import { Component } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {

  constructor(private service: PostService) { }

  getPosts() {
    return this.service.getPosts();
  }

  getPostId(id: number)
  {
    return this.service.getPostById(id).subscribe((res: any) => {
      //TODO aq vai a logica de redirecionamento para a pagina do post
      
      console.log(res);
    });
  }

}
