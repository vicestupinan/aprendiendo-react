import axios from "axios";
import { NoteType } from "../../types";

export const createNote = (noteToAdd: NoteType) => {
  return axios
    .post("https://jsonplaceholder.typicode.com/posts", noteToAdd)
    .then((response) => {
      return response.data;
    })
    .catch((e) => {
      console.log(e);
    });
};
