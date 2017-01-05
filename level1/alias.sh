DCN=level1
alias dc='docker-compose -f peers.yml'
alias vp0sh='docker exec -i -t ${DCN}_vp0_1'
alias vp1sh='docker exec -i -t ${DCN}_vp1_1'
alias vp2sh='docker exec -i -t ${DCN}_vp2_1'
alias vp3sh='docker exec -i -t ${DCN}_vp3_1'

alias vp0cli='vp0sh bitcoin-cli -conf=/opt/btc/bitcoin.conf -regtest -rpcport=18332'
alias vp1cli='vp1sh bitcoin-cli -conf=/opt/btc/bitcoin.conf -regtest -rpcport=18332'
alias vp2cli='vp2sh bitcoin-cli -conf=/opt/btc/bitcoin.conf -regtest -rpcport=18332'
alias vp3cli='vp3sh bitcoin-cli -conf=/opt/btc/bitcoin.conf -regtest -rpcport=18332'
