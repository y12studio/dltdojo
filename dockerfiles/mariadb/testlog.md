## TESTLOG

### Sat Jan 14 16:18:58 CST 2017
```
$ source alias.sh
$ dcup
Name             Command             State              Ports
-------------------------------------------------------------------------
devmdb_mariadb-    docker-            Up                 0.0.0.0:3306->33
master_1           entrypoint.sh                         06/tcp
             --wsr ...
devmdb_mariadb-    docker-            Up                 3306/tcp
slave_1            entrypoint.sh
             --bin ...
devmdb_mariadb-    docker-            Up                 3306/tcp
slave_2            entrypoint.sh
             --bin ...
devmdb_mariadb-    docker-            Up                 3306/tcp
slave_3            entrypoint.sh
             --bin ...

$ mysql1 -e 'show databases'
+--------------------+
| Database           |
+--------------------+
| information_schema |
| mysql              |
| performance_schema |
+--------------------+
$ mysql1 -e 'show status like "wsrep_%"'
+--------------------------+----------------------+
| Variable_name            | Value                |
+--------------------------+----------------------+
| wsrep_cluster_conf_id    | 18446744073709551615 |
| wsrep_cluster_size       | 0                    |
| wsrep_cluster_state_uuid |                      |
| wsrep_cluster_status     | Disconnected         |
| wsrep_connected          | OFF                  |
| wsrep_local_bf_aborts    | 0                    |
| wsrep_local_index        | 18446744073709551615 |
| wsrep_provider_name      |                      |
| wsrep_provider_vendor    |                      |
| wsrep_provider_version   |                      |
| wsrep_ready              | OFF                  |
| wsrep_thread_count       | 0                    |
+--------------------------+----------------------+
$ mysql1 -e 'show variables LIKE "%version%"'
+-------------------------+---------------------------------+
| Variable_name           | Value                           |
+-------------------------+---------------------------------+
| innodb_version          | 5.6.34-79.1                     |
| protocol_version        | 10                              |
| slave_type_conversions  |                                 |
| version                 | 10.1.20-MariaDB-1~jessie        |
| version_comment         | mariadb.org binary distribution |
| version_compile_machine | x86_64                          |
| version_compile_os      | debian-linux-gnu                |
| version_malloc_library  | system jemalloc                 |
| version_ssl_library     | OpenSSL 1.0.1t  3 May 2016      |
| wsrep_patch_version     | wsrep_25.16                     |
+-------------------------+---------------------------------+
$ mysql1 -e 'show variables where Variable_name like "%hostname%"'
+---------------+--------------+
| Variable_name | Value        |
+---------------+--------------+
| hostname      | a6c8295733f8 |
+---------------+--------------+
$ mysql2 -e 'show variables where Variable_name like "%hostname%"'
+---------------+--------------+
| Variable_name | Value        |
+---------------+--------------+
| hostname      | c7184d2c3fbe |
+---------------+--------------+
$ mysql1 -e "SHOW GLOBAL STATUS WHERE Variable_name IN ('wsrep_ready', 'wsrep_cluster_size', 'wsrep_cluster_status', 'wsrep_connected');"
+----------------------+--------------+
| Variable_name        | Value        |
+----------------------+--------------+
| wsrep_cluster_size   | 0            |
| wsrep_cluster_status | Disconnected |
| wsrep_connected      | OFF          |
| wsrep_ready          | OFF          |
+----------------------+--------------+

```
