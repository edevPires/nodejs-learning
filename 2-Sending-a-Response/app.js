const http = require("http")

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html')
    res.write('<html>')
    res.write('<head><title>Response</title></head>')
    res.write("<h1>Hello, i'm a response :D")
    res.write('</html>')
    res.end()
})

server.listen(3000)