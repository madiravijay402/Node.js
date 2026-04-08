import { log } from 'console';
import http from 'http';
console.log(http);
const app= http.createServer()

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})