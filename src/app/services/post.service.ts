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

  deletePostById(id: number): Promise<any> {
    return this.http.delete(`http://localhost:8080/post/${id}`).toPromise();
  }

  getPostsByDate(orientation: string) {
    //TODO: implementar a logica de ordenação por data e criação da rota no backend
    return this.http.get(`http://localhost:8080/post/date/${orientation}`);
  }
}
