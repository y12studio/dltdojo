### Setup
```
# mkdir tiguan1 ; cd tiguan1
# docker run -v $(pwd):/tmp y12docker/dltdojo build --dojo.btc 20 --dojo.eth 20 --dojo.fab 20 --dojo.mariadb 1 --dojo.mongo 1 --name tiguan1
# docker run -v $(pwd):/tmp y12docker/dltdojo build --bulkuser --num 20 --prefix tg --dojoname tiguan1
# cat djsetup.sh
# cat userinfo.txt
# chmod a+x djsetup.sh ; ./djsetup.sh
# source aliastiguan1.sh
// https://github.com/yeasy/docker-compose-files/tree/master/hyperledger/1.0
# docker pull yeasy/hyperledger-fabric-base:latest
# docker tag yeasy/hyperledger-fabric-base hyperledger/fabric-ccenv:x86_64-0.7.0-snapshot-75a4c82
# dcup
// tiguan1 start...
# dcend
```
