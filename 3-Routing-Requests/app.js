const http = require("http")

const server = http.createServer((req, res) => {

    const url = req.url
    res.setHeader('Content-Type', 'text/html')

    if (url === '/') {
        res.write('<html>')
        res.write('<head><title>Response</title></head>')
        res.write("<form action='/message method='POST'>")
        res.write("<input name='message' type='text'>")
        res.write("<input type='submit'>")
        res.write("</form>")
        res.write('</html>')
        return res.end()
    }

    res.write('<html>')
    res.write('<head><title>Response</title></head>')
    res.write("<h1>Hello, i'm a response :D")
    res.write('</html>')
    res.end()
})

server.listen(3000)