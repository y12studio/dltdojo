# LOG

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
