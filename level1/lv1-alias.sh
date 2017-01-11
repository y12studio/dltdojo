# Distributed Ledger Technology Dojo (DLTDOJO) 
# https://github.com/y12studio/dltdojo
# BitcoinCore alias script, name:lv1, peers:4
# DATETIME:2017-01-11T09:14:00.776Z
DCNAME=lv1
alias dc='docker-compose -p $DCNAME -f $DCNAME-peers.yml'
alias dcup='dc stop && dc rm && dc up -d && dc scale bvp1=3'
VP0ID=${DCNAME}_bvp0_1
alias vp0='docker exec -it $VP0ID'
VP1ID=${DCNAME}_bvp1_1
alias vp1='docker exec -it $VP1ID'
VP2ID=${DCNAME}_bvp1_2
alias vp2='docker exec -it $VP2ID'
VP3ID=${DCNAME}_bvp1_3
alias vp3='docker exec -it $VP3ID'
alias vp0cli='vp0 bitcoin-cli -conf=/opt/btc/bitcoin.conf -regtest -rpcport=18332'
alias vp1cli='vp1 bitcoin-cli -conf=/opt/btc/bitcoin.conf -regtest -rpcport=18332'
alias vp2cli='vp2 bitcoin-cli -conf=/opt/btc/bitcoin.conf -regtest -rpcport=18332'
alias vp3cli='vp3 bitcoin-cli -conf=/opt/btc/bitcoin.conf -regtest -rpcport=18332'