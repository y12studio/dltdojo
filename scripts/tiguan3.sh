# DLTDOJO https://github.com/y12studio/dltdojo
# ---- script start ----
DJID=$(docker ps --format "{{.Names}}" | grep dltdojo.1)
alias dj='docker exec -t $DJID node index.js'
alias dinfo='docker ps --format "{{.Names}}  {{.Ports}}" ; docker service ls'
alias djstop='docker run -t -v /var/run/docker.sock:/var/run/docker.sock y12docker/dltdojo service tiguan3 --stop'
BTCP1=$(docker ps --format "{{.Names}}" | grep btcpeer.1)
BTCP2=$(docker ps --format "{{.Names}}" | grep btcpeer.2)
BTCP3=$(docker ps --format "{{.Names}}" | grep btcpeer.3)
EBOOT=$(docker ps --format "{{.Names}}" | grep ethboot.1)
ETHP1=$(docker ps --format "{{.Names}}" | grep ethpeer.1)
ETHP2=$(docker ps --format "{{.Names}}" | grep ethpeer.2)
ETHP3=$(docker ps --format "{{.Names}}" | grep ethpeer.3)
MYSQL=$(docker ps --format "{{.Names}}" | grep mariadb.1)
MONGO=$(docker ps --format "{{.Names}}" | grep mongo.1)
IQUEXP=$(docker ps --format "{{.Names}}" | grep btciquexp.1)
alias iquexp_index='docker exec -t $IQUEXP node scripts/sync.js index'
# ---- script end ----
# DLTDOJO tiguan3
#   http://host_ip:18168/
