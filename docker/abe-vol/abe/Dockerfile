FROM python:2.7-alpine
WORKDIR /bitcoin-abe
RUN apk --update --no-cache add py-pip git build-base musl-dev python-dev
RUN pip install --upgrade pip
RUN pip install pycrypto && pip install Crypto
RUN git clone --depth=1 https://github.com/bitcoin-abe/bitcoin-abe && \
    cd bitcoin-abe ; python setup.py install
RUN ls /usr/local/lib/python2.7/site-packages
RUN ls /bitcoin-abe

FROM python:2.7-alpine
WORKDIR /bitcoin-abe
COPY --from=0 /bitcoin-abe .
COPY --from=0 /usr/local/lib/python2.7/site-packages /usr/local/lib/python2.7/site-packages
ADD abe-sqlite.conf ./
#CMD ["./app"]  