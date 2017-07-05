FROM ethereum/client-go:v1.6.6
# https://hub.docker.com/r/ethereum/client-go/
RUN apk --update add bash curl jq
ADD start.sh /start.sh
RUN chmod +x /start.sh
# override parent entrypoint
ENTRYPOINT []
CMD ["/start.sh"]