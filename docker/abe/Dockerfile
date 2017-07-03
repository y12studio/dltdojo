FROM seegno/bitcoind:0.14.2-alpine
RUN apk --update --no-cache add python py-pip bash && \
    apk add --virtual .builddeps git build-base musl-dev python-dev && \
    pip install --upgrade pip && \
    pip install pycrypto && pip install Crypto && \
    git clone --depth=1 https://github.com/bitcoin-abe/bitcoin-abe && \
    cd bitcoin-abe ; python setup.py install && \
    apk --no-cache --purge del .builddeps && \
    rm -rf /tmp/*
    # https://github.com/seegno/docker-bitcoind/blob/master/0.14/alpine/Dockerfile
    # apk --no-cache add boost boost-program_options libevent libzmq openssl su-exec

WORKDIR /bitcoin-abe
ADD abe-sqlite.conf ./
ADD start.sh /
RUN chmod a+x /start.sh
ADD bitcoin.conf /home/bitcoin/.bitcoin/
ENTRYPOINT ["/start.sh"]