### Sun Jan 22 13:20:53 CST 2017
https://docs.corda.net/setting-up-a-corda-network.html

```
$ docker build -t y12docker/dltdojo-corda -f Dockerfile.corda .
$ docker run -it y12docker/dltdojo-corda ls
# Generate certificate
$ docker run -it y12docker/dltdojo-corda bash
# java -jar node/capsule/build/libs/certSigningRequestUtility.jar --base-dir /tmp/
Exception in thread "main" java.net.UnknownHostException: cordaci-netperm.corda.r3cev.com
        at java.net.AbstractPlainSocketImpl.connect(AbstractPlainSocketImpl.java:184)
???
```
