FROM alpine:edge

RUN echo '@testing http://dl-cdn.alpinelinux.org/alpine/edge/testing' >> /etc/apk/repositories

RUN apk --update add git cargo@testing g++ rust@testing
RUN apk add --virtual .builddeps build-base

# rustup directory
ENV PATH /root/.cargo/bin:$PATH

# show backtraces
ENV RUST_BACKTRACE 1

# show tools
RUN rustc -vV && cargo -V && gcc -v && g++ -v

RUN git clone --depth 1 --branch master https://github.com/ethcore/parity

RUN cd parity && \
    cargo build --release --verbose && \
    ls /build/parity/target/release/parity && \
    strip /build/parity/target/release/parity

RUN file /build/parity/target/release/parity

EXPOSE 8080 8545 8180
ENTRYPOINT ["/build/parity/target/release/parity"]
