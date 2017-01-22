
https://hub.docker.com/r/y12docker/kotlin-gradle/

https://hub.docker.com/r/takitake/gradle-alpine/

https://hub.docker.com/r/supermina999/alpine-kotlin/

https://github.com/corda/corda/issues/18

### Sun Jan 22 13:08:14 CST 2017

```
$ docker build -t y12docker/kotlin-gradle:3.3 -f Dockerfile.kotlin-gradle .
$ docker run -it --rm y12docker/kotlin-gradle:3.3 java -version
openjdk version "1.8.0_111"
OpenJDK Runtime Environment (build 1.8.0_111-8u111-b14-2~bpo8+1-b14)
OpenJDK 64-Bit Server VM (build 25.111-b14, mixed mode)
$ docker run -it --rm y12docker/kotlin-gradle:3.3 gradle -v
------------------------------------------------------------
Gradle 3.3
------------------------------------------------------------

Build time:   2017-01-03 15:31:04 UTC
Revision:     075893a3d0798c0c1f322899b41ceca82e4e134b

Groovy:       2.4.7
Ant:          Apache Ant(TM) version 1.9.6 compiled on June 29 2015
JVM:          1.8.0_111 (Oracle Corporation 25.111-b14)
OS:           Linux 3.13.0-100-generic amd64

$ docker run -it --rm y12docker/kotlin-gradle:3.3 env
PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin
HOSTNAME=ae007161509a
TERM=xterm
LANG=C.UTF-8
JAVA_HOME=/usr/lib/jvm/java-8-openjdk-amd64
JAVA_VERSION=8u111
JAVA_DEBIAN_VERSION=8u111-b14-2~bpo8+1
CA_CERTIFICATES_JAVA_VERSION=20140324
GRADLE_VERSION=3.3
GRADLE_HOME=/opt/gradle
GRADLE_FOLDER=/root/.gradle
KOTLIN_VERSION=1.0.5
KOTLIN_HOME=/usr/share/kotlin
HOME=/root
$ docker push y12docker/kotlin-gradle:3.3
```
