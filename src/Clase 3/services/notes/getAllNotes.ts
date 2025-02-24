import axios from "axios";

export const getAllNotes = () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
      // Util para usar la variable en diferentes partes del codigo
      // const { data } = response
      // setNotes(data)
      //setNotes(response.data)
      return response.data;
    });
};
