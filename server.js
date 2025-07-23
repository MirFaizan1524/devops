const app = require("./app.js");

const port = process.env.PORT_NUMBER || 3000;


app.listen(port,()=>{

console.log(`Listening to the portNumber ${port}`);   

})