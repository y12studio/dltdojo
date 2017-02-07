# ---- script start ----
DJID=$(docker ps --format "{{.Names}}" | grep dltdojo.1)
alias dj='docker exec -t $DJID node index.js'
alias dinfo='docker ps --format "{{.Names}}  {{.Ports}}" ; docker service ls'
alias djstop='docker run -t -v /var/run/docker.sock:/var/run/docker.sock y12docker/dltdojo service eth --stop'
EBOOT=$(docker ps --format "{{.Names}}" | grep ethboot.1)
EP1=$(docker ps --format "{{.Names}}" | grep ethpeer.1)
EP2=$(docker ps --format "{{.Names}}" | grep ethpeer.2)
EP3=$(docker ps --format "{{.Names}}" | grep ethpeer.3)
# ---- script end ----
# carsenk explorer
#   http://host_ip:18000/ 
# DLTDOJO https://github.com/y12studio/dltdojo
#
