import fs from "fs"
import path from "path"
import {readFile, __dirname, __filename} from "../utils.js"


export const createTodo = ({ request }, res) => {
  let todos = []
  console.log("here", request);
  let oldTodos = readFile("data/todo.json")
  console.log(todos);
  todos = [...oldTodos, request]
  console.log(todos);
  fs.writeFileSync(path.join(__dirname, "data/todo.json"), JSON.stringify(todos), 'utf8', res)
  //req is the call
  //res is the callback, should be a function
}
export const readTodos = (req, res) => {
  console.log(req)
}
