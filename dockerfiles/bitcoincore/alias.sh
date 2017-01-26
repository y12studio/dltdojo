DNAME=y12docker/dltdojo-bitcoin
alias build='docker build -t ${DNAME} . ; echo "docker build -t ${DNAME}";  docker images | grep ${DNAME}'
alias drun='docker run -it ${DNAME}'
alias ds='docker service'
