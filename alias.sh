# Distributed Ledger Technology Dojo (DLTDOJO)
# https://github.com/y12studio/dltdojo
DCNAME=ddj
alias bdc='docker-compose -p $DCNAME -f dockerfiles/dltdojo/btc.yml'
alias dltdojobuild='docker build -t y12docker/dltdojo .'
alias bdcup='bdc stop ; bdc rm -f ; dltdojobuild ; bdc up -d'
alias dcdown='bdc stop ; bdc rm -f'
CPID1=${DCNAME}_bvp1_1
alias sh1='docker exec -it $CPID1'
alias dojoexec='docker exec -it ${DCNAME}_dltdojo_1'
alias ddj='dojoexec node index.js'
