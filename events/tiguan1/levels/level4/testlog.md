#### 2017-01-23T17:24:49+0800
```
$ source alias4a.sh
$ dcup
Name             Command             State              Ports
-------------------------------------------------------------------------
4a_bootnode_1      /geth --networki   Up                 30303/tcp,
             d=583113 - ...                        8545/tcp
4a_btcp1_1         /start.sh          Up                 18332/tcp,
             -regtest -txinde                      18333/tcp
             ...
4a_btcp2_1         /start.sh          Up                 18332/tcp,
             -regtest -txinde                      18333/tcp
             ...
4a_btcp3_1         /start.sh          Up                 18332/tcp,
             -regtest -txinde                      18333/tcp
             ...
4a_btcp4_1         /start.sh          Up                 18332/tcp,
             -regtest -txinde                      18333/tcp
             ...
4a_btcp5_1         /start.sh          Up                 18332/tcp,
             -regtest -txinde                      18333/tcp
             ...
4a_btcp6_1         /start.sh          Up                 18332/tcp,
             -regtest -txinde                      18333/tcp
             ...
4a_btcp_1          /start.sh          Up                 18332/tcp,
             -regtest -txinde                      18333/tcp
             ...
4a_dltdojo_1       node index.js      Up
             start
4a_ethp1_1         /start.sh          Up                 30303/tcp,
             --networkid=5831                      8545/tcp
             ...
4a_ethp2_1         /start.sh          Up                 30303/tcp,
             --networkid=5831                      8545/tcp
             ...
4a_ethp3_1         /start.sh          Up                 30303/tcp,
             --networkid=5831                      8545/tcp
             ...
4a_ethp4_1         /start.sh          Up                 30303/tcp,
             --networkid=5831                      8545/tcp
             ...
4a_ethp5_1         /start.sh          Up                 30303/tcp,
             --networkid=5831                      8545/tcp
             ...
4a_ethp6_1         /start.sh          Up                 30303/tcp,
             --networkid=5831                      8545/tcp
             ...
4a_ethp_1          /start.sh          Up                 30303/tcp,
             --networkid=5831                      8545/tcp
             ...
4a_mariadb1_1      docker-            Up                 3306/tcp
             entrypoint.sh
             mysqld
4a_mongo1_1        /entrypoint.sh     Up                 27017/tcp
             mongod
$ btcp1 account --new
$ ethp1 account --new --password pass1
$ dmysql -u root -proot -e 'show databases;'
$ dmongo --version
$ dcend
```
