const http = require('http')
const fs = require('fs')
const url = require('url')


const server = http.createServer((req,res)=>{
    const overview  = fs.readFileSync(`${__dirname}/index.html`, 'utf-8')

        const pathName = req.url
         if(pathName === "/overview"){
             res.writeHead(200,{'Content-type':'text/html'})
            res.end(overview)
        }
        else{
            res.writeHead(404,{})
            res.end("Hello World")
        }
})




server.listen(5000,'127.0.0.1', ()=>{
    console.log("App Listening")
})