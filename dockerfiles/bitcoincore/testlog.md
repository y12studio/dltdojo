####
```
// node index.js build --dojo.btc 18 --dojo.mariadb 1 --dojo.mongo 1 --name 4a --path levels/level4
$ dcup
$ dc logs btcp0
Attaching to 4a_btcp0_1
btcp0_1     | Error: Invalid -rpcallowip subnet specification: /24. Valid are a single IP (e.g. 1.2.3.4), a network/netmask (e.g. 1.2.3.4/255.255.255.0) or a network/CIDR (e.g. 1.2.3.4/24).
btcp0_1     | Error: Unable to start HTTP server. See debug log for details.
btcp0_1     | Assertion failed: nThreadsServicingQueue == 0 (scheduler.cpp: ~CScheduler: 19)
btcp0_1     | /start.sh: line 6:     9 Aborted                 (core dumped) bitcoind $BITCOIND_OPTS
```
