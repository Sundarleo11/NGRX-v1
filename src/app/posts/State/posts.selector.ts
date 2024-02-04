import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PostState } from "./posts.state";

export const POST_SELECTOR = "posts";
const getPostsState = createFeatureSelector<PostState>(POST_SELECTOR);

export const getPosts = createSelector(getPostsState, (state) => {
  return state.posts;
});

export const getPostById = createSelector(getPostsState, (state, props) => {
  return state.posts.find((post) => post.id === props.id);
});
