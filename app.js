const http = require('http');
const fs = require('fs');


http.createServer((req,res)=>{
    let data = req.body;
    fs.writeFile('message.txt',data,(err)=>{
        if(err)throw err;
        console.log("Message Saved");
    });
    res.writeHead(200,{'Content-Type': 'text/html'});
    res.write('<html>');
    res.write('<form action="/message" method="POST">');
    res.write('<label>Message</label><br>');
    res.write('<input name="message"id="message" placeholder="Enter Your Message"><br>');
    res.write('<button type="submit">Submit</button>');
    res.write('</form>');
    res.write('</html>');
    res.end();
    
}).listen(8080);


console.log('Server started on localhost:8080,Press Crtl-C to terminate ...')