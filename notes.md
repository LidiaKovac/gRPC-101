### gRPC 101: 

- uses HTTP2 instead of HTTP
- protocol buffers, a way to serialize data in a compact, binary way
    - a protocol file represents your server and the messages it will send
    - example: 
    ```proto
        syntax = 'proto3';
        //define message types (schema sort of thing)
        message EchoMessage { 
            string value = 1; //string === type, value === name of the prop, 1 === prop number
        }
        //define services
        service EchoService {
            //creates a function and defines body type and response type
            rpc EchoUnary(EchoMessage) returns (EchoMessage);
            rpc EchoClientStream(stream EchoMessage) returns (EchoMessage);
            rpc EchoServerStream(EchoMessage) returns (stream EchoMessage);
            rpc EchoBidiStream(stream EchoMessage) returns (stream EchoMessage);
        }
    ```
- 4 types of rpc
    - streaming (client side)
    - streaming (server side)
    - bidirectional (streaming on both sides)
    - unary (traditional requests)
- metadata (headers) 
    - auth is built-in
- built-in support of google auth
- client and server are able to timeout the request at any point
- compression is built-in
- load balancing => balances between several servers 

- can be run both on browser and node.js
- browser has some limitations
    - might not support http2
    - lack of APIs to control HTTP2
- node.js is more appropriate

- gRPC-web 
    - introduces envoy servers to communicate from browser to gRPC servers (serves as proxy)
- gRPC module 
    - compiled from C
    - used for both client and server
- @grpc/grpc-js
    - currently beta
    - more reliable than grpc module
    - supports typescript
    - uses node's http2 module
