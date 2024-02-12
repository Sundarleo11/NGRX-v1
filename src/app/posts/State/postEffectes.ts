import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import { map, mergeMap } from "rxjs/operators";
import { loadPostsSuccess, loadPosts } from "./posts.action";
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
}
