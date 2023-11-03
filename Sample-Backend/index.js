import express, { request, response } from "express";

const app = express();
const PORT = 3001;

let notes = [
  {
    id: 1,
    content: "HTML is easy",
    important: true,
  },
  {
    id: 2,
    content: "Browser can only execute Javascript",
    important: false,
  },
  {
    id: 3,
    content: "GET and POST are the most important method of HTTP",
    important: true,
  },
  {
    id: 4,
    content: "PUT and DELETE is also important",
    important: false,
  },
];

/**
 * RESTFUL API
 * ROUTES         HTTP    ACTION
 *
 * api/notes/:id  GET     fetch a single resource
 * api/notes      GET     fetch all resource
 * api/notes      POST    create a new resource
 * api/notes/:id  DELETE  delete a single resource
 * api/notes/:id  PUT     replace the specified resource
 * api/notes/:id  PATCH   replace a part of the specified resource
 **/

app.get("/", (request, response) => {
  response.send("<h1>Hello, Express!</h1>");
});

app.get("/api/notes/:id", (request, response) => {
  const id = Number(request.params.id);
  const note = notes.find((note) => note.id === id);
  response.status(200).json(note);
});

app.get("/api/notes", (request, response) => {
  response.status(200).json(notes);
});

app.delete("/api/notes/:id", (request, response) => {
  const id = Number(request.params.id);
  notes = notes.filter((note) => note.id !== id);

  response.status(204).end();
});

app.listen(PORT, () => {
  console.log(`Server is now running on port ${PORT}`);
});
