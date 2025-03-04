import { environment } from '../../environments/enviroment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }
  url = environment.apiUrl;
  createPost(post: any) {
    return this.http.post(`${this.url}/posts/add`, post);
  }

  getPosts() {
    return this.http.get(`${this.url}/posts/all`);
  }

  getPostById(id: number) {
    return this.http.get(`${this.url}/posts/${id}`);
  }

  deletePostById(id: number): Promise<any> {
    return this.http.delete(`${this.url}/posts/${id}`).toPromise();
  }

  getPostsByDate(orientation: string) {
    //TODO: implementar a logica de ordenação por data e criação da rota no backend
    return this.http.get(`${this.url}/posts/date/${orientation}`);
  }
}
