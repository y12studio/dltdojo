
https://hub.docker.com/r/y12docker/kotlin-gradle/

https://hub.docker.com/r/takitake/gradle-alpine/

https://hub.docker.com/r/supermina999/alpine-kotlin/

https://github.com/corda/corda/issues/18

### Sun Jan 22 13:08:14 CST 2017

```
$ docker build -t kotlin-gradle:3.3 -f Dockerfile.kotlin-gradle .
$ docker run -it --rm kotlin-gradle:3.3 gradle -v

------------------------------------------------------------
Gradle 3.3
------------------------------------------------------------

Build time:   2017-01-03 15:31:04 UTC
Revision:     075893a3d0798c0c1f322899b41ceca82e4e134b

Groovy:       2.4.7
Ant:          Apache Ant(TM) version 1.9.6 compiled on June 29 2015
JVM:          1.8.0_112 (Oracle Corporation 25.112-b15)
OS:           Linux 3.13.0-100-generic amd64

$ docker run -it --rm kotlin-gradle:3.3 env
PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/lib/gradle/gradle-3.3/bin
HOSTNAME=f61417bf9159
TERM=xterm
LANG=C.UTF-8
JAVA_VERSION=8
JAVA_UPDATE=112
JAVA_BUILD=15
JAVA_HOME=/usr/lib/jvm/default-jvm
KOTLIN_VERSION=1.0.5
KOTLIN_HOME=/usr/share/kotlin
GRADLE_VERSION=3.3
GRADLE_HOME=/usr/lib/gradle/gradle-3.3
HOME=/root

$ docker build -t y12docker/kotlin-gradle:3.3 -f Dockerfile.kotlin-gradle .
$ docker push y12docker/kotlin-gradle:3.3
```
