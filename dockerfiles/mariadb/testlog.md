### 2017-02-17T08:57:20+0800
```
$ source alias.sh
$ dcup
$ dc ps
Name             Command             State              Ports
-------------------------------------------------------------------------
devmdb_mariadb1_   docker-            Up                 3306/tcp
1                  entrypoint.sh
             mysqld
devmdb_mariadb2_   docker-            Up                 3306/tcp
1                  entrypoint.sh
             mysqld
devmdb_phpmyadmi   /run.sh            Up                 0.0.0.0:8080->80
n_1                phpmyadmin                            /tcp

```
### Sun Jan 22 09:56:12 CST 2017
```
$ dmysql -u root -proot
>
CREATE DATABASE mydb;
CREATE USER 'haha1'@'localhost' IDENTIFIED BY 'haha1pass';
CREATE USER 'haha2'@'localhost' IDENTIFIED BY 'haha2pass';
GRANT ALL PRIVILEGES ON mydb.* TO 'haha1'@'localhost';
GRANT ALL PRIVILEGES ON mydb.* TO 'haha2'@'localhost';
FLUSH PRIVILEGES;
$ dmysql -u haha1 -phaha1pass
```
### Sat Jan 21 14:34:11 CST 2017
```
$ dc ps
      Name                    Command             State    Ports
------------------------------------------------------------------
devmdb_mariadb1_1   docker-entrypoint.sh mysqld   Up      3306/tcp
devmdb_mariadb2_1   docker-entrypoint.sh mysqld   Up      3306/tcp
$ mysql1 -e 'CREATE DATABASE mydb;'
$ mysql1 -e 'show databases;'
$ mysql1 -e 'CREATE TABLE mytable ( id INT PRIMARY KEY, name VARCHAR(34) , balance INT UNSIGNED );' mydb
$ mysql1 -e 'show tables;' mydb
$ mysql1 -e 'INSERT INTO mytable VALUES ( 1, "mpywCp28LcmDHNKxJy9tUuXc1LcXK5gCoT", 1000);' mydb
$ mysql1 -e 'INSERT INTO mytable VALUES ( 2, "mjisABTPq6DwgUv4rzBtt1gY44hwBX4zZy", 2000);' mydb
$ mysql1 -e 'SELECT * FROM mytable WHERE id = 1;' mydb
$ mysql1 -e 'SELECT * FROM mytable;' mydb
+----+----------------------+---------+
| id | name                 | balance |
+----+----------------------+---------+
|  1 | mpywCp28LcmDHNKxJy9t |    1000 |
|  2 | mjisABTPq6DwgUv4rzBt |    2000 |
+----+----------------------+---------+
$ mysql1 -e 'START TRANSACTION; UPDATE mytable SET balance=balance-80 WHERE id=1; UPDATE mytable SET balance=balance+80 WHERE id=2; COMMIT;' mydb
$ mysql1 -e 'SELECT * FROM mytable;' mydb
+----+----------------------+---------+
| id | name                 | balance |
+----+----------------------+---------+
|  1 | mpywCp28LcmDHNKxJy9t |     920 |
|  2 | mjisABTPq6DwgUv4rzBt |    2080 |
+----+----------------------+---------+
```
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
