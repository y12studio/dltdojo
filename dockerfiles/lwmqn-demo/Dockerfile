FROM y12docker/dltdojo-bex
# https://github.com/lwmqn/lwmqn-demo
RUN apk --update --no-cache add nodejs redis && \
    apk add --virtual .builddeps build-base python musl-dev && \
    git clone --depth=1 https://github.com/y12studio/lwmqn-demo.git /lwmqn-demo && \
    cd /lwmqn-demo && npm install && \
    apk --no-cache --purge del .builddeps
WORKDIR /lwmqn-demo
ADD start.sh /start.sh
RUN chmod +x /start.sh
