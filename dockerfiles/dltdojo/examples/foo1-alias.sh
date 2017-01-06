# Distributed Ledger Technology Dojo (DLTDOJO) 
# https://github.com/y12studio/dltdojo
# BitcoinCore alias script, name:foo1, peers:6
DCN=foo1
alias dc='docker-compose -p foo1 -f foo1-peers.yml'
alias dcup='dc stop && dc rm && dc up -d && dc scale bvp1=5'
alias vp0='docker exec -i -t foo1_bvp0_1'
alias vp1='docker exec -i -t foo1_bvp1_1'
alias vp2='docker exec -i -t foo1_bvp1_2'
alias vp3='docker exec -i -t foo1_bvp1_3'
alias vp4='docker exec -i -t foo1_bvp1_4'
alias vp5='docker exec -i -t foo1_bvp1_5'
alias vp0cli='vp0 bitcoin-cli -conf=/opt/btc/bitcoin.conf -regtest -rpcport=18332'
alias vp1cli='vp1 bitcoin-cli -conf=/opt/btc/bitcoin.conf -regtest -rpcport=18332'
alias vp2cli='vp2 bitcoin-cli -conf=/opt/btc/bitcoin.conf -regtest -rpcport=18332'
alias vp3cli='vp3 bitcoin-cli -conf=/opt/btc/bitcoin.conf -regtest -rpcport=18332'
alias vp4cli='vp4 bitcoin-cli -conf=/opt/btc/bitcoin.conf -regtest -rpcport=18332'
alias vp5cli='vp5 bitcoin-cli -conf=/opt/btc/bitcoin.conf -regtest -rpcport=18332'