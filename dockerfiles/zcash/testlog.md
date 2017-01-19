### Wed Jan 18 18:34:15 CST 2017
```
$ docker build -t y12docker/dltdojo-zcash .
$ docker images | grep zcash
y12docker/dltdojo-zcash                                                                                                                                   latest                          83fa14e7210c        57 minutes ago      1.115 GB
$ docker run -it y12docker/dltdojo-zcash
root@86bb4e65a46c:/# dpkg-query -L zcash
/.
/etc
/etc/bash_completion.d
/etc/bash_completion.d/zcash-cli
/etc/bash_completion.d/zcashd
/usr
/usr/bin
/usr/bin/zcash-cli
/usr/bin/zcash-fetch-params
/usr/bin/zcashd
/usr/share
/usr/share/doc
/usr/share/doc/zcash
/usr/share/doc/zcash/changelog.Debian.gz
/usr/share/doc/zcash/changelog.gz
/usr/share/doc/zcash/copyright
/usr/share/doc/zcash/examples
/usr/share/doc/zcash/examples/zcash.conf
/usr/share/man
/usr/share/man/man1
/usr/share/man/man1/zcash-cli.1.gz
/usr/share/man/man1/zcashd.1.gz

$ dcup
No stopped containers
Creating network "devzcash_default" with the default driver
Creating devzcash_zcash_1
$ dc ps
      Name         Command   State   Ports
------------------------------------------
devzcash_zcash_1   zcashd    Up

$ zp1 zcash-cli getinfo
{
    "version" : 1000450,
    "protocolversion" : 170002,
    "walletversion" : 60000,
    "balance" : 0.00000000,
    "blocks" : 0,
    "timeoffset" : 0,
    "connections" : 0,
    "proxy" : "",
    "difficulty" : 1.00000000,
    "testnet" : false,
    "keypoololdest" : 1484836208,
    "keypoolsize" : 101,
    "paytxfee" : 0.00000000,
    "relayfee" : 0.00001000,
    "errors" : ""
}

$ zp1 zcash-cli getnetworkinfo
{
    "version" : 1000450,
    "subversion" : "/MagicBean:1.0.4/",
    "protocolversion" : 170002,
    "localservices" : "0000000000000001",
    "timeoffset" : 0,
    "connections" : 0,
    "networks" : [
        {
            "name" : "ipv4",
            "limited" : false,
            "reachable" : false,
            "proxy" : "",
            "proxy_randomize_credentials" : false
        },
        {
            "name" : "ipv6",
            "limited" : false,
            "reachable" : false,
            "proxy" : "",
            "proxy_randomize_credentials" : false
        },
        {
            "name" : "onion",
            "limited" : false,
            "reachable" : false,
            "proxy" : "",
            "proxy_randomize_credentials" : false
        }
    ],
    "relayfee" : 0.00001000,
    "localaddresses" : [
    ]
}
$ zp1cli getnewaddress
tmYw84s4kfQ5aBdajFwcR3g5ZkNoXppi1Uq
$ zp1cli z_getnewaddress
ztr7Neu9LUdknGyeFgS5wseFnoM4rzCisZyDD3b9NmB5wMM1FKR35u8rcqWAZ2Sw6dbHRE7axt5g1WSCK2EC6RDJiLySuz2
$ zp1cli generate 101
$ zp1cli getinfo
{
    "version" : 1000450,
    "protocolversion" : 170002,
    "walletversion" : 60000,
    "balance" : 20.00000000,
    "blocks" : 102,
    "timeoffset" : 0,
    "connections" : 0,
    "proxy" : "",
    "difficulty" : 1.00000507,
    "testnet" : false,
    "keypoololdest" : 1484836208,
    "keypoolsize" : 101,
    "paytxfee" : 0.00000000,
    "relayfee" : 0.00001000,
    "errors" : ""
}
```
