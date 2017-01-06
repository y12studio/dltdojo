DCN=foo1
alias dc='docker-compose -p foo1 -f foo1-peers.yml'
alias dcup='dc stop && dc rm && dc up -d'
alias vp0='docker exec -i -t foo1_vp0_1'
alias vp0cli='vp0 bitcoin-cli -conf=/opt/btc/bitcoin.conf -regtest -rpcport=18332'
alias vp1='docker exec -i -t foo1_vp1_1'
alias vp1cli='vp1 bitcoin-cli -conf=/opt/btc/bitcoin.conf -regtest -rpcport=18332'
alias vp2='docker exec -i -t foo1_vp2_1'
alias vp2cli='vp2 bitcoin-cli -conf=/opt/btc/bitcoin.conf -regtest -rpcport=18332'