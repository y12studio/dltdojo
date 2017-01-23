### Sun Jan 22 13:20:53 CST 2017
https://docs.corda.net/setting-up-a-corda-network.html

https://docs.corda.r3cev.com/running-the-demos.html

2.6G??
```
$ docker build -t y12docker/dltdojo-corda -f Dockerfile.corda .
$ docker images | grep corda
y12docker/dltdojo-corda  latest  8ae687d55a77        17 minutes ago      2.633 GB
$ docker run -it y12docker/dltdojo-corda ls
$ docker run -it y12docker/dltdojo-corda ls -al node/build/libs
total 920
drwxr-xr-x  2 root root   4096 Jan 22 15:38 .
drwxr-xr-x 12 root root   4096 Jan 22 15:41 ..
-rw-r--r--  1 root root 932102 Jan 22 15:38 node-0.8-SNAPSHOT.jar

# Generate certificate
$ docker run -it y12docker/dltdojo-corda bash
# java -jar node/capsule/build/libs/certSigningRequestUtility.jar --base-dir /tmp/
Exception in thread "main" java.net.UnknownHostException: cordaci-netperm.corda.r3cev.com
        at java.net.AbstractPlainSocketImpl.connect(AbstractPlainSocketImpl.java:184)
???

# ./gradlew samples:trader-demo:deployNodes
# ls -al samples/trader-demo/build/nodes
total 32
drwxr-xr-x  6 root root 4096 Jan 22 16:13 .
drwxr-xr-x 10 root root 4096 Jan 22 16:13 ..
drwxr-xr-x  4 root root 4096 Jan 22 16:13 BankA
drwxr-xr-x  4 root root 4096 Jan 22 16:13 BankB
drwxr-xr-x  4 root root 4096 Jan 22 16:13 BankOfCorda
drwxr-xr-x  4 root root 4096 Jan 22 16:13 Notary
-rwxr-xr-x  1 root root 1384 Jan 22 16:13 runnodes
-rwxr-xr-x  1 root root  152 Jan 22 16:13 runnodes.bat
# cat samples/trader-demo/build/nodes/runnodes
#!/usr/bin/env bash
# Will attempt to execute a corda node within all subdirectories in the current working directory.

set -euo pipefail
export CAPSULE_CACHE_DIR=cache

# Allow the script to be run from outside the nodes directory.
basedir=$( dirname "$0" )
cd "$basedir"

if which osascript >/dev/null; then
    # MacOS X: open each node in a in new tab.
    first=true
    script='tell app "Terminal"
    activate'
    rootdir=`pwd`
    for dir in `ls`; do
        if [ -d $dir ]; then
            cmd="bash -c 'cd $rootdir/$dir; /usr/libexec/java_home -v 1.8 --exec java -jar corda.jar && exit'"
            script="$script
    tell application \"System Events\" to tell process \"Terminal\" to keystroke \"t\" using command down
    delay 0.5
    do script \"$cmd\" in window 1"
            first=false
        fi
    done
    script="$script
end tell"
    osascript -e "$script"
else
    # Some other UNIX, probably Linux (does not support msys or cygwin)
    # TODO: msys and cygwin support
    #
    # If it is set, it means that java overrides the default system java, which is what we want.
    if [ -n "${JAVA_HOME-}" ]; then
        export PATH="$JAVA_HOME/bin:$PATH"
    fi
    for dir in `ls`; do
        if [ -d $dir ]; then
            pushd $dir >/dev/null
            xterm -T "`basename $dir`" -e 'java -jar corda.jar' &
            popd >/dev/null
        fi
    done
fi
# find . -type f -name "*corda*.jar"
./build/libs/corda-project-0.8-SNAPSHOT.jar
./samples/trader-demo/build/nodes/BankOfCorda/dependencies/bank-of-corda-demo-0.8-SNAPSHOT.jar
./samples/trader-demo/build/nodes/BankOfCorda/corda.jar
./samples/trader-demo/build/nodes/Notary/dependencies/bank-of-corda-demo-0.8-SNAPSHOT.jar
./samples/trader-demo/build/nodes/Notary/corda.jar
./samples/trader-demo/build/nodes/BankA/dependencies/bank-of-corda-demo-0.8-SNAPSHOT.jar
./samples/trader-demo/build/nodes/BankA/corda.jar
./samples/trader-demo/build/nodes/BankB/dependencies/bank-of-corda-demo-0.8-SNAPSHOT.jar
./samples/trader-demo/build/nodes/BankB/corda.jar
./samples/bank-of-corda-demo/build/libs/bank-of-corda-demo-0.8-SNAPSHOT.jar
./node/capsule/build/libs/corda-0.8-SNAPSHOT.jar

# ls -lR samples/trader-demo/build/nodes/BankA
samples/trader-demo/build/nodes/BankA:
total 45892
-rw-r--r-- 1 root root 46979071 Jan 22 16:13 corda.jar
drwxr-xr-x 2 root root     4096 Jan 22 16:13 dependencies
-rw-r--r-- 1 root root      432 Jan 22 16:13 node.conf
drwxr-xr-x 2 root root     4096 Jan 22 16:13 plugins

samples/trader-demo/build/nodes/BankA/dependencies:
total 16932
-rw-r--r-- 1 root root   25051 Jan 22 16:13 bank-of-corda-demo-0.8-SNAPSHOT.jar
-rw-r--r-- 1 root root  310100 Jan 22 16:13 client-0.8-SNAPSHOT.jar
-rw-r--r-- 1 root root  832410 Jan 22 16:13 commons-math-2.1.jar
-rw-r--r-- 1 root root 2035066 Jan 22 16:13 commons-math3-3.4.1.jar
-rw-r--r-- 1 root root   44787 Jan 22 16:13 easybind-1.0.3.jar
-rw-r--r-- 1 root root    6437 Jan 22 16:13 error_prone_annotations-2.0.2.jar
-rw-r--r-- 1 root root  335406 Jan 22 16:13 gs-algo-1.3.jar
-rw-r--r-- 1 root root  926273 Jan 22 16:13 gs-core-1.3.jar
-rw-r--r-- 1 root root  447110 Jan 22 16:13 gs-ui-1.3.jar
-rw-r--r-- 1 root root  754108 Jan 22 16:13 guava-testlib-19.0.jar
-rw-r--r-- 1 root root 1117661 Jan 22 16:13 itext-2.1.5.jar
-rw-r--r-- 1 root root  506386 Jan 22 16:13 jcommon-1.0.17.jar
-rw-r--r-- 1 root root 1461633 Jan 22 16:13 jfreechart-1.0.14.jar
-rw-r--r-- 1 root root   23238 Jan 22 16:13 mbox2-1.0.jar
-rw-r--r-- 1 root root  350361 Jan 22 16:13 okhttp-3.5.0.jar
-rw-r--r-- 1 root root   79429 Jan 22 16:13 okio-1.11.0.jar
-rw-r--r-- 1 root root   46227 Jan 22 16:13 pherd-1.0.jar
-rw-r--r-- 1 root root  428541 Jan 22 16:13 reactfx-2.0-M5.jar
-rw-r--r-- 1 root root 7137903 Jan 22 16:13 scala-library-2.10.1.jar
-rw-r--r-- 1 root root  237076 Jan 22 16:13 test-utils-0.8-SNAPSHOT.jar
-rw-r--r-- 1 root root  194354 Jan 22 16:13 xml-apis-1.3.04.jar

samples/trader-demo/build/nodes/BankA/plugins:
total 112
-rw-r--r-- 1 root root 114086 Jan 22 16:13 trader-demo-0.8-SNAPSHOT.jar

```
