import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  createPost(post: any) {
    return this.http.post('http://localhost:8080/post', post);
  }

  getPosts() {
    return this.http.get('http://localhost:8080/post');
  }

  getPostById(id: number) {
    return this.http.get(`http://localhost:8080/post/${id}`);
  }
}
