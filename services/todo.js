import fs, { read } from "fs"
import path from "path"
import { readFile, __dirname, __filename } from "../utils.js"

export const createTodo = ({ request }, send) => {
  let todos = []
  let oldTodos = readFile("data/todo.json")
  todos = [...oldTodos, request]
  fs.writeFileSync(
    path.join(__dirname, "data/todo.json"),
    JSON.stringify(todos),
    "utf8",
    send
  )
  //req is the call
  //send is the callback, should be a function
  send(null, request)
}
export const readTodos = (req, send) => {
  let todos = readFile("data/todo.json")
  send(null, {items: todos})
}

export const editTodo = ({ request }, send) => {
  let allTodos = readFile("data/todo.json")
  let foundTodos = allTodos.filter((todo) => todo.id === request.id)
  console.log(foundTodos)
  let newTodos = allTodos.filter((todo) => todo.id !== request.id)
  newTodos.push(request)
  fs.writeFileSync(
    path.join(__dirname, "data/todo.json"),
    JSON.stringify(request),
    "utf8",
    send
  )

  if (foundTodos.length === 0) {
    send("No todo found with id " + request.id, null)
  } else send(null, request)
}

export const deleteToDo = ({ request }, send) => {
  let allTodos = readFile("data/todo.json")
  let newTodos = allTodos.filter((todo) => todo.id !== request.id)
  fs.writeFileSync(
    path.join(__dirname, "data/todo.json"),
    JSON.stringify(newTodos),
    "utf8",
    send
  )
}
