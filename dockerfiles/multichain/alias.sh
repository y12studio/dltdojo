DNAME=y12docker/dltdojo-multichain
alias build='docker build -t ${DNAME} . ; echo "docker build -t ${DNAME}"'
alias drun='docker run -it ${DNAME}'
