# Distributed Ledger Technology Dojo (DLTDOJO)
# https://github.com/y12studio/dltdojo
DCNAME=devmdb
alias dc='docker-compose -p $DCNAME -f dev-peer.yml'
alias dcup='dc stop ; dc rm -f ; dc up -d ; dc scale mariadb-slave=3'
alias dcdown='dc stop ; dc rm -f'
CPID1=${DCNAME}_mariadb-slave_1
CPID2=${DCNAME}_mariadb-slave_2
alias sh1='docker exec -it $CPID1'
alias mysql1='sh1 mysql -u root -proot'
alias mysql2='docker exec -it $CPID2 mysql -u root -proot'
