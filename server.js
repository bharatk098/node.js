const app1 = require('./app1');
const http = require('http');
http.createServer((req,resp)=>{

resp.write('the total is : '+app1.c());
resp.end();

}).listen(4500);