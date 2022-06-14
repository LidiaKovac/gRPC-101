import grpc from "grpc"
import protoLoader from "@grpc/proto-loader"
import uniqid from "uniqid"

//the proto file needs to be compiled

const packDef = protoLoader.loadSync("./services/services.proto", {
    includeDirs: ["./services"]
})
//we want to retried the todoPackage as an object
const grpcObject = grpc.loadPackageDefinition(packDef)
const todoPackage = grpcObject.todoPackage

const client = new todoPackage.Todo("localhost:3003", grpc.credentials.createInsecure())
console.log(client);
client.createTodo({id: uniqid(), text: "Buy Dood"}, (err, res) => {
    if (err) console.log(err); 
    else console.log(JSON.stringify(res));
})