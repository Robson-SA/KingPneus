const express= require ('express')
const nunjucks = require ('nunjucks')


const server = express()

server.use(express.static('public'))

server.set("view engine","njk")

nunjucks.configure("views", {
    express: server
})

server.get("/", function(req, res){
    return res.render("index")

})
server.get("/list-product", function(req, res){
    return res.render("list-product")

})


server.listen (5002, function(){
    console.log("server is running")
})