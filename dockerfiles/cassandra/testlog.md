### 2017-02-10T07:50:10+0800
```
$ source alias.sh
$ dcup
$ cas1 nodetool status
Datacenter: datacenter1
=======================
Status=Up/Down
|/ State=Normal/Leaving/Joining/Moving
--  Address        Load       Tokens       Owns (effective)  Host ID                               Rack
UN  192.168.240.2  108.49 KiB  256          100.0%            1c2a21e4-be4f-4aa9-ae85-beef6fa0c8b2  rack1
UN  192.168.240.3  108.2 KiB  256          100.0%            6bfcee90-bc51-4aba-9687-1e3e9a63303d  rack1

$ cas1 cqlsh localhost
Connected to Test Cluster at localhost:9042.
[cqlsh 5.0.1 | Cassandra 3.9 | CQL spec 3.4.2 | Native protocol v4]
Use HELP for help.
cqlsh> create keyspace mykeyspace with replication = {'class':'SimpleStrategy','replication_factor' : 2};
cqlsh> use mykeyspace;
cqlsh:mykeyspace> create table usertable (userid int primary key, username varchar);
cqlsh:mykeyspace> insert into usertable (userid, username) values (1, 'Alice');
cqlsh:mykeyspace> select * from usertable ;
 userid | username
--------+----------
      1 |    Alice
(1 rows)
cqlsh:mykeyspace> exit

$ caseed cqlsh localhost
Connected to Test Cluster at localhost:9042.
[cqlsh 5.0.1 | Cassandra 3.9 | CQL spec 3.4.2 | Native protocol v4]
Use HELP for help.
cqlsh> use mykeyspace;
cqlsh:mykeyspace> select * from usertable;

 userid | username
--------+----------
      1 |    Alice

(1 rows)
cqlsh:mykeyspace> exit
```
