from hyperledger/fabric-ccenv
 COPY . $GOPATH/src/build-chaincode/
  WORKDIR $GOPATH

 RUN go install build-chaincode && mv $GOPATH/bin/build-chaincode $GOPATH/bin/mycc