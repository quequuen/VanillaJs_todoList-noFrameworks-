import { createStore } from "../lib/createStore";

export const globalStore = createStore({
  posts: [
    {
      id: 1,
      creation: "2025-05-01",
      deadLine: "2025-05-25",
      isDone: "Y",
      content: "javaScript 공부하기",
    },
    {
      id: 2,
      creation: "2025-05-01",
      deadLine: "2025-05-25",
      isDone: "N",
      content: "java 공부하기",
    },
    {
      id: 3,
      creation: "2025-05-01",
      deadLine: "2025-05-25",
      isDone: "N",
      content: "c 공부하기",
    },
    {
      id: 4,
      creation: "2025-05-01",
      deadLine: "2025-08-24",
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
    {
      id: 6,
      creation: "2025-05-01",
      deadLine: "2025-05-28",
      isDone: "N",
      content: "컴퓨터과학기초 공부하기",
    },
    {
      id: 7,
      creation: "2025-05-01",
      deadLine: "2025-05-25",
      isDone: "Y",
      content: "정보통신개론 공부하기",
    },
    {
      id: 8,
      creation: "2025-05-01",
      deadLine: "2025-05-25",
      isDone: "Y",
      content: "정보보호개론 공부하기",
    },
    {
      id: 9,
      creation: "2025-05-01",
      deadLine: "2025-05-25",
      isDone: "Y",
      content: "알고리즘기초 공부하기",
    },
  ],
});
