# ---- script start ----
DJID=$(docker ps --format "{{.Names}}" | grep dltdojo.1)
alias dj='docker exec -t $DJID node index.js'
alias djstop='docker run -t -v /var/run/docker.sock:/var/run/docker.sock y12docker/dltdojo service ethpoadev --stop'
EPA0=$(docker ps --format "{{.Names}}" | grep ethpoa0.1)
EPA1=$(docker ps --format "{{.Names}}" | grep ethpoa1.1)
EP1=$(docker ps --format "{{.Names}}" | grep ethpoapeer.1)
EP2=$(docker ps --format "{{.Names}}" | grep ethpoapeer.2)
EP3=$(docker ps --format "{{.Names}}" | grep ethpoapeer.3)
alias dinfo='docker ps --format "{{.Names}}" ; docker service ls'
alias poainfo='dj eth $EPA0 account --list ; dj eth $EPA1 account --list'

# ---- script end ----
