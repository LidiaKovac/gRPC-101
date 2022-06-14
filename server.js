import grpc from "grpc"
import protoLoader from "@grpc/proto-loader"
import { readTodos, createTodo } from "./services/todo.js"

//the proto file needs to be compiled

const packDef = protoLoader.loadSync("./services/services.proto")
//we want to retried the todoPackage as an object
const grpcObject = grpc.loadPackageDefinition(packDef)
const todoPackage = grpcObject.todoPackage

//create server

const server = new grpc.Server()
server.bind("localhost:3003", grpc.ServerCredentials.createInsecure())
//this does not need auth :)

server.addService(todoPackage.Todo.service, {
  createTodo: createTodo,
  readTodos: readTodos,
})
server.start() //starts the server
console.log("server has started");

//create a function for each service
//each of them take 2 params
