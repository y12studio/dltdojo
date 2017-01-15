# Distributed Ledger Technology Dojo (DLTDOJO)
# https://github.com/y12studio/dltdojo
DCNAME=ddltdojo
alias dc='docker-compose -p $DCNAME -f dockerfiles/dltdojo/btc.yml'
alias dcup='dc stop ; dc rm -f ; dc up -d'
alias dcdown='dc stop ; dc rm -f'
CPID1=${DCNAME}_bvp1_1
alias sh1='docker exec -it $CPID1'
