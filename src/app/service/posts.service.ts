import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { Post } from "../model/posts.model";
@Injectable({
  providedIn: "root",
})
export class PostsService {
  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    return this.http
      .get<Post[]>(`https://vue-completecourse.firebaseio.com/posts.json`)
      .pipe(
        map((data) => {
          const posts: Post[] = [];
          for (let key in data) {
            posts.push({ ...data[key], id: key });
          }
          return posts;
        })
      );
  }

  addPost(post: Post): Observable<{ name: string }> {
    return this.http.post<{ name: string }>(
      `https://vue-completecourse.firebaseio.com/posts.json`,
      post
    );
  }

  updatePost(post: Post) {
    const postData = {
      [post.id]: { title: post.title, description: post.description },
    };
    console.log("postDate", postData);
    return this.http.patch(
      `https://vue-completecourse.firebaseio.com/posts.json`,
      postData
    );
  }

  DeletePost(id: String) {
    return this.http.delete(
      `https://vue-completecourse.firebaseio.com/posts/${id}.json`
    );
  }
}
