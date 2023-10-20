import axios from "axios";
const baseURL = "http://localhost:3001/Persons";

function getAll() {
  const request = axios.get(baseURL);
  return request.then((response) => response.data);
}

function create(newObject) {
  const request = axios.post(baseURL, newObject);
  return request.then((response) => response.data);
}
function deletePerson(id) {
  const request = axios.delete(`${baseURL}/${id}`);
  return request.then((response) => response);
}
export default {
  getAll,
  create,
  deletePerson,
};
