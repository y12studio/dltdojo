### TEST

Start all containers 

```
$ docker-compose up -d
$ docker-compose ps
       Name                     Command               State                                     Ports
---------------------------------------------------------------------------------------------------------------------------------------
kafka_kafka0_1       /docker-entrypoint.sh /opt ...   Up      0.0.0.0:32791->9092/tcp, 9093/tcp
kafka_kafka1_1       /docker-entrypoint.sh /opt ...   Up      0.0.0.0:32792->9092/tcp, 9093/tcp
kafka_kafka2_1       /docker-entrypoint.sh /opt ...   Up      0.0.0.0:32793->9092/tcp, 9093/tcp
kafka_kafka3_1       /docker-entrypoint.sh /opt ...   Up      0.0.0.0:32790->9092/tcp, 9093/tcp
kafka_zookeeper0_1   /docker-entrypoint.sh zkSe ...   Up      0.0.0.0:32783->2181/tcp, 0.0.0.0:32782->2888/tcp, 0.0.0.0:32781->3888/tcp
kafka_zookeeper1_1   /docker-entrypoint.sh zkSe ...   Up      0.0.0.0:32789->2181/tcp, 0.0.0.0:32788->2888/tcp, 0.0.0.0:32787->3888/tcp
kafka_zookeeper2_1   /docker-entrypoint.sh zkSe ...   Up      0.0.0.0:32786->2181/tcp, 0.0.0.0:32785->2888/tcp, 0.0.0.0:32784->3888/tcp
```
Send simple string messages to a topic:
```
$ docker-compose exec kafka0 bash
root@daea9c878821:/# ls /opt/kafka/bin
connect-distributed.sh               kafka-replica-verification.sh
connect-standalone.sh                kafka-run-class.sh
kafka-acls.sh                        kafka-server-start.sh
kafka-configs.sh                     kafka-server-stop.sh
kafka-console-consumer.sh            kafka-simple-consumer-shell.sh
kafka-console-producer.sh            kafka-topics.sh
kafka-consumer-groups.sh             kafka-verifiable-consumer.sh
kafka-consumer-offset-checker.sh     kafka-verifiable-producer.sh
kafka-consumer-perf-test.sh          windows
kafka-mirror-maker.sh                zookeeper-security-migration.sh
kafka-preferred-replica-election.sh  zookeeper-server-start.sh
kafka-producer-perf-test.sh          zookeeper-server-stop.sh
kafka-reassign-partitions.sh         zookeeper-shell.sh
kafka-replay-log-producer.sh

root@daea9c878821:/# /opt/kafka/bin/kafka-topics.sh --zookeeper zookeeper0:2181 --list
test
```

Stop all containers 
```
$ docker-compose stop
```

### REFERENCES

* Bringing up a Kafka-based Ordering Service https://github.com/hyperledger/fabric/blob/master/docs/source/kafka.rst
* https://github.com/hyperledger/fabric/blob/master/bddtests/dc-orderer-kafka-base.yml
* https://github.com/hyperledger/fabric/blob/master/bddtests/dc-orderer-kafka.yml