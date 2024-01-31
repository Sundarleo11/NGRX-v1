import { counterReducer } from "../Counter/State/counter.reducer";
import { CounterState } from "../Counter/State/counter.state";
import { postsReducer } from "../posts/State/posts.reducer";
import { PostState } from "../posts/State/posts.state";

export interface appState {
  counter: CounterState;
  posts: PostState;
}

export const appReducer = {
  counter: counterReducer,
  posts: postsReducer,
};
