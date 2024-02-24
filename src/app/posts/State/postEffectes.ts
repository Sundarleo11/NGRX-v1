import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import { map, mergeMap } from "rxjs/operators";
import {
  loadPostsSuccess,
  loadPosts,
  addPostSuccess,
  addPost,
} from "./posts.action";
import { PostsService } from "src/app/service/posts.service";

@Injectable()
export class PostsEffects {
  constructor(private actions$: Actions, private postsService: PostsService) {}

  loadPosts$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(loadPosts),
        mergeMap((action) => {
          return this.postsService.getPosts().pipe(
            map((posts) => {
              console.log(posts);
              return loadPostsSuccess({ posts });
            })
          );
        })
      );
    }
    //{ dispatch: false }
  );

  AddPosts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(addPost),
      mergeMap((action) => {
        return this.postsService.addPost(action.post).pipe(
          map((data) => {
            console.log(data);
            const post = { ...action.post, id: data.name };
            return addPostSuccess({ post });
          })
        );
      })
    );
  });
}
