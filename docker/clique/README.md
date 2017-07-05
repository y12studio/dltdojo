### Create 3 Nodes

```
$ docker run -it -v dltdojo:/dltdojo dltdojo/clique:1.6.6 ./build.sh
$ docker-compose up -d
$ docker-compose ps
$ docker-compose exec node0 ./info.sh
```

### Build image

```
$ docker build -t dltdojo/clique:1.6.6 .
$ docker push dltdojo/clique:1.6.6
```

### Referneces
* 使用 go-ethereum 1.6 Clique PoA consensus 建立 Private chain (1)  https://medium.com/taipei-ethereum-meetup/%E4%BD%BF%E7%94%A8-go-ethereum-1-6-clique-poa-consensus-%E5%BB%BA%E7%AB%8B-private-chain-1-4d359f28feff
