import grpc from "grpc"
import protoLoader from "@grpc/proto-loader"
import uniqid from "uniqid"

//the proto file needs to be compiled

const packDef = protoLoader.loadSync("./services/services.proto", {
  includeDirs: ["./services"],
})
//we want to retried the todoPackage as an object
const grpcObject = grpc.loadPackageDefinition(packDef)
const todoPackage = grpcObject.todoPackage

const client = new todoPackage.Todo(
  "localhost:3003",
  grpc.credentials.createInsecure()
)
console.log(client)
// client.createTodo({id: uniqid(), text: "Buy Food"}, (err, res) => {
//     if (err) console.log(err);
//     else console.log(JSON.stringify(res));
// })

// client.editTodo({id: "5441xkjzwl4e20m5w", text: "EDITED TODO"}, (err, res) => {
//         if (err) console.log(err);
//         else console.log(JSON.stringify(res));
//     })

client.deleteTodo({ id: "5441xkjzwl4e20m5w" }, (err, res) => {
  if (err) console.log(err)
  else console.log(JSON.stringify(res))
})
