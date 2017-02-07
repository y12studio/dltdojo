# Distributed Ledger Technology Dojo (DLTDOJO)
# https://github.com/y12studio/dltdojo
DCNAME=devethgo
alias dc='docker-compose -p $DCNAME'
alias dcstop='dc stop && dc rm -f'
alias dcup='dc down && dc up -d'
CPID=${DCNAME}_ethboot_1
alias ethbootsh='docker exec -it ${DCNAME}_ethboot_1'
alias ethpeersh='docker exec -it ${DCNAME}_ethpeer_1'
alias ethdevsh='docker exec -it ${DCNAME}_ethdev_1'
