var schedule = require('node-schedule')
var request = require('request')

let url = 'http://bisswiz.com:11111/set\?host\=warehouse'

function sendDNS() {
    request.get(url, function(err, res, body){
        if (res.statusCode == 200) {
            console.log('send ok')
        } else {
            console.log('server not response')
        }
    })
}

sendDNS()
var j = schedule.scheduleJob('/10 * * * * *', function(){
    sendDNS()
})
