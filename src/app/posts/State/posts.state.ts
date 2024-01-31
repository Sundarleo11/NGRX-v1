import { Post } from "src/app/model/posts.model";

export interface PostState {
  posts: Post[];
}

export const initialState = {
  posts: [
    { id: 1, title: "sample title 1", decription: "sample decription" },
    { id: 2, title: "sample title 2", decription: "sample decription" },
  ],
};
