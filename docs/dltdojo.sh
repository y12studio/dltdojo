#!/usr/bin/env bash
# bash <(curl https://y12studio.github.io/dltdojo/dltdojo.sh -Lk)
function version_gt() { test "$(printf '%s\n' "$@" | sort -V | head -n 1)" != "$1"; }
function show_info() {
	echo ""
	echo HOSTIP=`ip route get 1 | awk '{print $NF;exit}'`
	echo "SERVICE="$1
	echo "docker swarm init --advertise-addr \$HOSTIP"
	echo "docker network create --driver overlay --subnet 10.0.63.0/24 djnet"
	echo "docker run -t -v /var/run/docker.sock:/var/run/docker.sock y12docker/dltdojo service \$SERVICE --start --network djnet --pubhost \$HOSTIP"

}
if [ ! $(command -v docker) ]; then
    echo "ERROR: docker not available."
    exit 1
fi
VERSION=$(docker --version | cut -d' ' -f3 | cut -d',' -f1)
echo "Docker Version : "$VERSION
if version_gt 1.13.0 $VERSION; then
	echo "ERROR: docker version 1.13+ not available."
	exit 1
fi
echo "DLTDOJO"
docker pull y12docker/dltdojo
docker pull y12docker/dltdojo-bex
show_info "tiguan4"
