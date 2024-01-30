export interface CounterState {
  counter: number;
  courseName: string;
}

export const initialSate: CounterState = {
  counter: 0,
  courseName: "Angular",
};
