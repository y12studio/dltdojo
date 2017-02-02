# Distributed Ledger Technology Dojo (DLTDOJO) 
# https://github.com/y12studio/dltdojo
# Dltdojo peers yml file , name:1a  btc peers:4
# DATETIME:2017-01-24T03:03:26.058Z
confirm() {
    # call with a prompt string or use a default
    read -r -p "${1:-Are you sure? [y/N]} " response
    case "$response" in
        [yY][eE][sS]|[yY])
            true
            ;;
        *)
            false
            ;;
    esac
}

DLTDOJOID=1
DCNAME=1a
alias dc='docker-compose -p $DCNAME -f peers$DCNAME.yml'
alias dcup='dcend ; dc up -d; dc ps'
alias dcend='dc stop ; dc rm -f'
alias dojoexec='docker exec -it ${DCNAME}_dltdojo_1'
alias ddj='dojoexec node index.js'
alias btcpstop='confirm && dc stop btcp${DLTDOJOID}'
alias btcpstart='confirm && dc start btcp${DLTDOJOID}'
alias btcp='ddj btc btcp${DLTDOJOID}'
alias btcpexec='docker exec -t ${DCNAME}_btcp${DLTDOJOID}_1'
alias ethpstop='confirm && dc stop ethp${DLTDOJOID}'
alias ethpstart='confirm && dc start ethp${DLTDOJOID}'
alias ethp='ddj btc ethp${DLTDOJOID}'
alias ethpexec='docker exec -t ${DCNAME}_ethp${DLTDOJOID}_1'
alias fabpstop='confirm && dc stop fabp${DLTDOJOID}'
alias fabpstart='confirm && dc start fabp${DLTDOJOID}'
alias fabp='ddj btc fabp${DLTDOJOID}'
alias fabpexec='docker exec -t ${DCNAME}_fabp${DLTDOJOID}_1'