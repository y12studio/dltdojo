# Distributed Ledger Technology Dojo (DLTDOJO)
# https://github.com/y12studio/dltdojo
DCNAME=dclwmqn
# https://github.com/y12studio/dltdojo/blob/master/lib/Tiguan5Coin.sol
XADDR=0xef360a8b39442dc87c60aa957b07016cb396f164
YADDR=0x0028e590fc2789a2ae4da1824780390a3bc483a8
ZADDR=0x4c41deb7f34a6e625458d62f3fb6553545e9ecfd
alias dc='docker-compose -p $DCNAME'
alias dcstop='dc stop && dc rm -f'
alias dcup='dcstop && dc up -d'
alias dj='dc exec dltdojo node index.js'
