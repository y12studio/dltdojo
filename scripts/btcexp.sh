# DLTDOJO https://github.com/y12studio/dltdojo
# ---- script start ----
DJID=$(docker ps --format "{{.Names}}" | grep dltdojo.1)
alias dj='docker exec -t $DJID node index.js'
alias dinfo='docker ps --format "{{.Names}}  {{.Ports}}" ; docker service ls'
alias djstop='docker run -t -v /var/run/docker.sock:/var/run/docker.sock y12docker/dltdojo service btc --stop'
BTCP1=$(docker ps --format "{{.Names}}" | grep btcpeer.1)
BTCP2=$(docker ps --format "{{.Names}}" | grep btcpeer.2)
BTCP3=$(docker ps --format "{{.Names}}" | grep btcpeer.3)
IQUEXP=$(docker ps --format "{{.Names}}" | grep btciquexp.1)
alias iquexp_index='docker exec -t $IQUEXP node scripts/sync.js index'
alias btcinfo='dj btc $BTCP1 info ; dj btc $BTCP2 info ; dj btc $BTCP3 info'
# ---- script end ----
# Abe Browser
#   http://host_ip:12750/
#   https://github.com/bitcoin-abe/bitcoin-abe
# Iquidus Explorer
#   http://host_ip:12751/
#   https://github.com/iquidus/explorer
# JornC Blockchain Transaction Explorer
#   http://host_ip:12752/
#   https://github.com/JornC/bitcoin-transaction-explorer
# DLTDOJO service btcexp
#  https://github.com/y12studio/dltdojo/blob/master/dockerfiles/dltdojo/testlog.btcexp.md
