const fs = require('fs')

const requestHandler = (req, res) => {
    const url = req.url
    const method = req.method

    res.setHeader('Content-Type', 'text/html')

    if (url === '/') {
        res.write('<html>')
        res.write('<head><title>Response</title></head>')
        res.write("<form action='/message' method='POST'>")
        res.write("<input name='message' type='text'>")
        res.write("<input type='submit'>")
        res.write("</form>")
        res.write('</html>')
        return res.end()
    }
    if (url === '/message' && method === 'POST') {
        const body = []
        req.on('data', (chunk) => {
            console.log(chunk)
            body.push(chunk)
        })
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString()
            const message = parsedBody.split('=',)[1]
            // Nem eu entendi essa parada ai do replace     vvvvv
            fs.writeFileSync('message.txt', message.replace(/\+/g, ' '))
        })
        res.statusCode = 302
        res.setHeader('Location', '/')
        return res.end()
    }
    res.write('<html>')
    res.write('<head><title>Response</title></head>')
    res.write("<h1>Hello, i'm a response :D")
    res.write('</html>')
    res.end()
}

module.exports = requestHandler