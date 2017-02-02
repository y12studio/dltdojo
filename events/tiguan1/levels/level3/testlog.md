### 2017-01-23T14:12:56+0800
```
// node index.js build --dojo.fab 6 --name 3a --path levels/level3
$ source alias3a.sh
$ dcup
$ fabp1 peer channel create -c ch1
$ fabp1 peer channel join -b ch1.block
$ fabp1 sh -c "export CORE_PEER_ADDRESS=fabp2:7051 ; peer channel join -b ch1.block"
$ fabp1 sh -c "export CORE_PEER_ADDRESS=fabp3:7051 ; peer channel join -b ch1.block"

$ fabp1 peer chaincode deploy -C ch1 -n mycc0 -p github.com/hyperledger/fabric/examples/chaincode/go/chaincode_example02 -c '{"Args":["init","a","100","b","200"]}'

$ fabp1 peer chaincode query -C ch1 -n mycc0 -c '{"Args":["query","a"]}'
$ fabp2 peer chaincode query -C ch1 -n mycc0 -c '{"Args":["query","b"]}'
$ fabp1 peer chaincode invoke -C ch1 -n mycc0 -c '{"Args":["invoke","a","b","10"]}'
$ fabp2 peer chaincode query -C ch1 -n mycc0 -c '{"Args":["query","b"]}'

$ fabp3 peer chaincode deploy -C ch1 -n mycc3 -p github.com/hyperledger/fabric/examples/chaincode/go/chaincode_example02 -c '{"Args":["init","a","900","b","1200"]}'
$ fabp3 peer chaincode query -C ch1 -n mycc3 -c '{"Args":["query","b"]}'
$ fabp2 peer chaincode invoke -C ch1 -n mycc3 -c '{"Args":["invoke","a","b","99"]}'
$ fabp1 peer chaincode query -C ch1 -n mycc3 -c '{"Args":["query","a"]}'
$ dcend
```
