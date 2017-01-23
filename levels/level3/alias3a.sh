# Distributed Ledger Technology Dojo (DLTDOJO) 
# https://github.com/y12studio/dltdojo
# Hyperledger Fabric alias script, name:3a, peers:6
# DATETIME:2017-01-23T06:58:43.825Z
DCNAME=3a
alias dc='docker-compose -p $DCNAME -f peers$DCNAME.yml'
alias dcup='dcend ; dc up -d; dc ps'
alias dcend='dc stop ; dc rm -f'
alias dojoexec='docker exec -it ${DCNAME}_dltdojo_1'
alias ddj='dojoexec node index.js'
alias fabp='docker exec -t ${DCNAME}_fabp_1'
alias fabp1='docker exec -t ${DCNAME}_fabp1_1'
alias fabp2='docker exec -t ${DCNAME}_fabp2_1'
alias fabp3='docker exec -t ${DCNAME}_fabp3_1'
alias fabp4='docker exec -t ${DCNAME}_fabp4_1'
alias fabp5='docker exec -t ${DCNAME}_fabp5_1'