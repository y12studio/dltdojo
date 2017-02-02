DCNAME=devethgo
DNAME=y12docker/dltdojo-ethparity:1.5.0
DCNAME=devparity
alias build='docker build -t ${DNAME} . ; echo "docker build -t ${DNAME}"'
alias dparity='docker run -t ${DNAME} parity'
alias dc='docker-compose -p $DCNAME -f poa.yml'
alias dcend='dc stop ; dc rm -f'
alias dcup='dcend ; dc up -d'
