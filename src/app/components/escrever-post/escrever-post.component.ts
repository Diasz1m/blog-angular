import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-escrever-post',
  templateUrl: './escrever-post.component.html',
  styleUrls: ['./escrever-post.component.scss']
})
export class EscreverPostComponent {
  form: FormGroup;

  constructor(private service: PostService) {
    this.form = new FormGroup({
      title: new FormControl('', Validators.required),
      content: new FormControl('', Validators.required),
      check: new FormControl(''),
      user_id: new FormControl(localStorage.getItem('user_id'), Validators.required),
    });
    
  }

  onSubmit() {
    console.log(this.form.value);
    if(this.form.valid)
    {
      this.service.createPost(this.form.value).subscribe((res: any) => {
        
        if(res.post_id)
        {
          window.location.href = `http://localhost:4200/post/${res.post_id}`;
        }
      });
    }
  }
}
