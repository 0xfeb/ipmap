var express = require('express')
var app = express()

var mapList = new Array()
let port = 11111

function getClientIp(req) {
    return req.headers['x-forwarded-for'] ||
    req.connection.remoteAddress ||
    req.socket.remoteAddress ||
    req.connection.socket.remoteAddress;
}

app.get('/set', function(req, res){
    let host = req.query.host
    let ip = req.query.ip
    if (ip == undefined) {
        ip = getClientIp(req)
    }

    //console.log(req)
    console.log(ip)

    mapList[host] = ip

    res.send('OK')
})

app.get('/get', function(req, res){
    let host = req.query.host

    let ip = mapList[host]

    res.send(ip)
})

app.listen(port, function(){
    console.log('listen in port:'+String(port))
})