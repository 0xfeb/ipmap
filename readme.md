# IP Map Tool

## Feature
Get an ip address of host like HTTPDNS but more simpliy.

Use nodejs to run this tool and pm2 to manage this.

## Usage
### install
npm install
Run `node index.js` or add index.js into pm2's process list, it will run ipmap tool in port 11111.

### set ip/host pair:
```curl http://{server}:11111/set?host=www.aaa.com&ip=192.168.1.1```
Parameter 'ip' can be empty and it will automatic get the ip of client connection.

### get ip of host:
```curl http://{server}:11111/get?host=www.aaa.com```
