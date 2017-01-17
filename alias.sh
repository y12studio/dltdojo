# Distributed Ledger Technology Dojo (DLTDOJO)
# https://github.com/y12studio/dltdojo
DCNAME=ddj
alias bdc='docker-compose -p $DCNAME -f dockerfiles/dltdojo/btc.yml'
alias edc='docker-compose -p $DCNAME -f dockerfiles/dltdojo/eth.yml'
alias bdcup='bdc stop ; bdc rm -f ; docker build -t y12docker/dltdojo:dev . ; bdc up -d'
alias bdcend='bdc stop ; bdc rm -f'
alias edcup='edc stop ; edc rm -f ; docker build -t y12docker/dltdojo:dev . ; edc up -d'
alias edcend='edc stop ; edc rm -f'
alias btcp1exec='docker exec -it ${DCNAME}_btcp1_1'
alias ethp1exec='docker exec -it ${DCNAME}_ethp1_1'
alias ethp1key='ethp1exec find /root/.ethereum/devchain/keystore -maxdepth 1 -name "UTC*" -exec cat {} \; | jq .'
alias dojoexec='docker exec -it ${DCNAME}_dltdojo_1'
alias ddj='dojoexec node index.js'
alias btcp1='ddj btc btcp1'
alias ethp1='ddj eth ethp1'
