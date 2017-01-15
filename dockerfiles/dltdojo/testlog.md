### Sun Jan 15 16:26:36 CST 2017
```
// docker-compose -p $DCNAME -f dockerfiles/dltdojo/btc.yml
$ dcup
$ dc ps
      Name             Command             State              Ports
-------------------------------------------------------------------------
ddltdojo_bvp0_1    bitcoind           Up                 18332/tcp,
                   -regtest                              18333/tcp
                   -txindex ...
ddltdojo_bvp1_1    bitcoind           Up                 127.0.0.1:18332-
                   -regtest                              >18332/tcp, 127.
                   -txindex ...                          0.0.1:18333->183
                                                         33/tcp
$ sh1 ifconfig
eth0      Link encap:Ethernet  HWaddr 02:42:AC:63:00:02
          inet addr:172.99.0.2  Bcast:0.0.0.0  Mask:255.255.0.0
          inet6 addr: fe80::42:acff:fe63:2/64 Scope:Link
          UP BROADCAST RUNNING MULTICAST  MTU:1500  Metric:1
          RX packets:27 errors:0 dropped:0 overruns:0 frame:0
          TX packets:28 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:0
          RX bytes:2379 (2.3 KiB)  TX bytes:2373 (2.3 KiB)

lo        Link encap:Local Loopback
          inet addr:127.0.0.1  Mask:255.0.0.0
          inet6 addr: ::1/128 Scope:Host
          UP LOOPBACK RUNNING  MTU:65536  Metric:1
          RX packets:14 errors:0 dropped:0 overruns:0 frame:0
          TX packets:14 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:0
          RX bytes:720 (720.0 B)  TX bytes:720 (720.0 B)

$ curl --user user --data-binary '{"jsonrpc": "1.0", "id":"curltest", "method": "getinfo", "params": [] }' -H 'content-type: text/plain;' http://127.0.0.1:18332/
$ node index.js info
{ _: [ 'info' ],
  name: 'alice',
  '$0': '/usr/bin/nodejs index.js' }
undefined
{ isvalid: true,
  address: 'mfYNDVTY1VbtxCtiPiTA5miZxZ2ngZMEKj',
  scriptPubKey: '76a9140044626dba504f8db1bb3eb009cbb0d731f02b6588ac',
  ismine: true,
  iswatchonly: false,
  isscript: false,
  pubkey: '02ac066f7cc057a64b45cdd1306f66426768e0aa9f45b8d8957c661081d9fb2cdc',
  iscompressed: true,
  account: '',
  hdkeypath: 'm/0\'/0\'/1\'',
  hdmasterkeyid: '5cf3f4394cd0b324e8f831ce16c20bb835e77c83' }
```
