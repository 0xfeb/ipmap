# IP Map Tool

## Feature
Get an ip address of host like HTTPDNS but more simpliy.

Use nodejs to run this tool and pm2 to manage this.

## Usage
### set ip/host pair:
```curl http://{server}:11111/set\?host\=www.aaa.com\&ip\=192.168.1.1```
Parameter 'ip' can be empty and it will automatic get the ip of client connection.

### get ip of host:
```curl http://{server}:11111/set\?host\=www.aaa.com\&ip\=192.168.1.1```
