# Distributed Ledger Technology Dojo (DLTDOJO) 
# https://github.com/y12studio/dltdojo
# BitcoinCore alias script, name:level1, peers:4
DCN=level1
alias dc='docker-compose -p level1 -f level1-peers.yml'
alias dcup='dc stop && dc rm && dc up -d && dc scale bvp1=3'
alias vp0='docker exec -i -t level1_bvp0_1'
alias vp1='docker exec -i -t level1_bvp1_1'
alias vp2='docker exec -i -t level1_bvp1_2'
alias vp3='docker exec -i -t level1_bvp1_3'
alias vp0cli='vp0 bitcoin-cli -conf=/opt/btc/bitcoin.conf -regtest -rpcport=18332'
alias vp1cli='vp1 bitcoin-cli -conf=/opt/btc/bitcoin.conf -regtest -rpcport=18332'
alias vp2cli='vp2 bitcoin-cli -conf=/opt/btc/bitcoin.conf -regtest -rpcport=18332'
alias vp3cli='vp3 bitcoin-cli -conf=/opt/btc/bitcoin.conf -regtest -rpcport=18332'