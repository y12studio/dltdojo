###2017-02-02T09:49:48+0800
```
$ docker version
Client:
 Version:      1.13.0
 API version:  1.25
 Go version:   go1.7.3
 Git commit:   49bf474
 Built:        Tue Jan 17 09:50:17 2017
 OS/Arch:      linux/amd64

Server:
 Version:      1.13.0
 API version:  1.25 (minimum version 1.12)
 Go version:   go1.7.3
 Git commit:   49bf474
 Built:        Tue Jan 17 09:50:17 2017
 OS/Arch:      linux/amd64
 Experimental: false
$ docker run -t -v /var/run/docker.sock:/var/run/docker.sock y12docker/dltdojo service tiguan2 --start
$ docker service ls
$ DJID=$(docker ps --format "{{.Names}}" | grep dltdojo.1)
$ alias dj='docker exec -t $DJID node index.js'
```
