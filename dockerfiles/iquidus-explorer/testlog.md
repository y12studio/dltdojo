### 2017-02-05T12:20:08+0800
```
$ docker run -d -p 13001:3001 y12docker/dltdojo-iquexp /start.sh
$ docker ps
CONTAINER ID        IMAGE                      COMMAND             CREATED             STATUS              PORTS                     NAMES
bff17fe22189     y12docker/dltdojo-iquexp   "/start.sh"         5 seconds ago       Up 4 seconds        0.0.0.0:13001->3001/tcp   suspicious_raman
// open http://host_ip:13001/
$ docker exec -it bff17fe22189 bash
# bitcoin-cli generate 101
# bitcoin-cli sendtoaddress mvbnrCX3bg1cDRUu8pkecrvP6vQkSLDSou 10.00
975cee89d3f1dbb19b88d241745ac5788b32a444887bef314c66a5ee8702591e
# bitcoin-cli generate 1
# bitcoin-cli sendtoaddress mvbnrCX3bg1cDRUu8pkecrvP6vQkSLDSou 5.5
# bitcoin-cli generate 2
```
