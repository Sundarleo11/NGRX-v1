import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import { map, mergeMap, switchMap } from "rxjs/operators";
import {
  loadPostsSuccess,
  loadPosts,
  addPostSuccess,
  addPost,
  updatePostSuccess,
  updatePost,
} from "./posts.action";
import { PostsService } from "src/app/service/posts.service";
import { dispatch } from "rxjs/internal/observable/pairs";

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

  UpdatePosts$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(updatePost),
        switchMap((action) => {
          return this.postsService.updatePost(action.post).pipe(
            map((data) => {
              return updatePostSuccess({ post: action.post });
            })
          );
        })
      );
    }
    //  { dispatch: false }
  );
}
