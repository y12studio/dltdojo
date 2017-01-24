# Distributed Ledger Technology Dojo (DLTDOJO) 
# https://github.com/y12studio/dltdojo
# Dltdojo peers yml file , name:2b  eth peers:2
# DATETIME:2017-01-24T03:30:19.024Z
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
DCNAME=2b
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
alias ethp='ddj eth ethp${DLTDOJOID}'
alias ethpexec='docker exec -t ${DCNAME}_ethp${DLTDOJOID}_1'