# DLTDOJO https://github.com/y12studio/dltdojo
# ---- script start ----
DJID=$(docker ps --format "{{.Names}}" | grep dltdojo.1)
alias dj='docker exec -t $DJID node index.js'
alias dinfo='docker ps --format "{{.Names}}  {{.Ports}}" ; docker service ls'
alias djstop='docker run -t -v /var/run/docker.sock:/var/run/docker.sock y12docker/dltdojo service tiguan4 --stop'
BCP1=$(docker ps --format "{{.Names}}" | grep btcpeer.1)
BCP2=$(docker ps --format "{{.Names}}" | grep btcpeer.2)
BUP1=$(docker ps --format "{{.Names}}" | grep bupeer.1)
BUP2=$(docker ps --format "{{.Names}}" | grep bupeer.2)
ETHP1=$(docker ps --format "{{.Names}}" | grep ethpoapeer.1)
ETHP2=$(docker ps --format "{{.Names}}" | grep ethpoapeer.2)
ETHP3=$(docker ps --format "{{.Names}}" | grep ethpoapeer.3)
# ---- script end ----
# DLTDOJO tiguan3
#   http://host_ip:18168/
