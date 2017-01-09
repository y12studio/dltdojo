# LOG

## LOG0109_1

```
$ node index.js --level 2 --path level2 --name level2 --peers 6
$ docker build -t y12docker/dltdojo:0.0.4 .
$ docker run -v $(pwd):/tmp y12docker/dltdojo:0.0.4 --level 2 --name level2 --peers 6
$ 
```

## LOG0107

```
$ docker build -t y12docker/dltdojo:0.0.3 .
$ cd examples
$ docker run -v $(pwd):/tmp y12docker/dltdojo:0.0.3 --path=/tmp --name=foo3 --peers=6 --level=2
$ source foo3-alias.sh
$ vp1curl personal_newAccount '"vp1pass"'
{"jsonrpc":"2.0","method":"personal_newAccount","params":["vp1pass"],"id":67}
{
  "jsonrpc": "2.0",
  "id": 67,
  "result": "0xc1d8a6b9ce958f916d81e81084c37085161b3254"
}
```

## LOG0106 0.0.2
```
$ date && docker -v
Fri Jan  6 17:59:57 CST 2017
Docker version 1.12.5, build 7392c3b
$ docker build -t y12docker/dltdojo:0.0.2 .
$ docker run y12docker/dltdojo:0.0.2
Usage: index.js --path=[string] --name=[string] --peers=[num] --level=[num]

Options:
  --path                                                              [required]
  --name                                                              [required]
  --peers                                                             [required]
  --level                                                           [default: 1]

Missing required arguments: path, name, peers
$ cd examples
$ docker run -v $(pwd):/tmp y12docker/dltdojo:0.0.2 --path=/tmp --name=foo1 --peers=6 --level=1
$ source foo1-alias.sh
$ dcup
No stopped containers
Creating foo1_bvp0_1
Creating foo1_bvp1_1
Creating and starting foo1_bvp1_2 ... done
Creating and starting foo1_bvp1_3 ... done
Creating and starting foo1_bvp1_4 ... done
Creating and starting foo1_bvp1_5 ... done
$ dc ps
   Name                  Command               State          Ports
---------------------------------------------------------------------------
foo1_bvp0_1   bitcoind -regtest -txindex ...   Up      18332/tcp, 18333/tcp
foo1_bvp1_1   bitcoind -regtest -txindex ...   Up      18332/tcp, 18333/tcp
foo1_bvp1_2   bitcoind -regtest -txindex ...   Up      18332/tcp, 18333/tcp
foo1_bvp1_3   bitcoind -regtest -txindex ...   Up      18332/tcp, 18333/tcp
foo1_bvp1_4   bitcoind -regtest -txindex ...   Up      18332/tcp, 18333/tcp
foo1_bvp1_5   bitcoind -regtest -txindex ...   Up      18332/tcp, 18333/tcp
$ vp5cli getpeerinfo
$ dc stop && dc rm
$ docker push y12docker/dltdojo:0.0.2
```
## LOG0106
```
$ date && docker -v
Fri Jan  6 13:44:01 CST 2017
Docker version 1.12.5, build 7392c3b
$ docker build -t y12docker/dltdojo:0.0.1 .
$ docker run y12docker/dltdojo:0.0.1
Usage: index.js --path=[string] --name=[string] --peers=[num]

Options:
  --path                                                              [required]
  --name                                                              [required]
  --peers                                                             [required]

Missing required arguments: path, name, peers
$ cd examples
$ docker run -v $(pwd):/tmp y12docker/dltdojo:0.0.1 --path=/tmp --name=foo1 --peers=6
$ source foo1-alias.sh
$ dcup
$ dc ps
$ dc stop && dc rm
$ docker push y12docker/dltdojo:0.0.1
$ $ docker images | grep dltdojo
y12docker/dltdojo 0.0.1                  1ca5b4d4930c        17 minutes ago      72.89 MB
y12docker/dltdojo-ethgo 1.5.5                  faa604a0655d        19 hours ago        396.3 MB
y12docker/dltdojo-bitcoin 0.13.1.core            857247b417b9        23 hours ago        24.97 MB
y12docker/dltdojo-bitcoin 0.13.2.core            fa02c299dab5        23 hours ago        23.96 MB
```
