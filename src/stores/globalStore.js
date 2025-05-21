import { createStore } from "../lib/createStore";

export const globalStore = createStore({
  posts: [
    {
      id: 1,
      creation: "2025-05-01",
      deadLine: "2025-05-21",
      isDone: "Y",
      content: "javaScript 공부하기",
    },
    {
      id: 2,
      creation: "2025-05-01",
      deadLine: "2025-05-21",
      isDone: "N",
      content: "java 공부하기",
    },
    {
      id: 3,
      creation: "2025-05-01",
      deadLine: "2025-05-21",
      isDone: "N",
      content: "c 공부하기",
    },
    {
      id: 4,
      creation: "2025-05-01",
      deadLine: "2025-08-25",
      isDone: "N",
      content: "toeic 공부하기",
    },
    {
      id: 5,
      creation: "2025-05-01",
      deadLine: "2025-11-29",
      isDone: "N",
      content: "typeScript 공부하기",
    },
  ],
});
