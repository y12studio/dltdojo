# T1

# SETUP

```
$ mkdir level2 && cd level2
$ docker run -v $(pwd):/tmp y12docker/dltdojo:0.0.3 --path=/tmp --name=level2 --peers=6 --level=2
$ source level1-alias.sh
$ dc up -d
$ dc stop && dc rm
```
