FROM ubuntu:trusty

ENV DEB=parity_1.5.0_amd64.deb
ENV DEBURL=http://d1h4xl4cr1h0mo.cloudfront.net/v1.5.0/x86_64-unknown-linux-gnu/$DEB
RUN apt-get update ; apt-get install -y curl openssl jq \
    && cd /tmp ; curl -L -O $DEBURL ; dpkg -i $DEB ; dpkg-deb -c $DEB ; rm $DEB
WORKDIR /opt/parity
ADD poa-init-spec.json poa-final-spec.json node.pwds initpoa0.sh initpoa1.sh /opt/parity/
RUN chmod +x initpoa*.sh
ENTRYPOINT ["parity"]
