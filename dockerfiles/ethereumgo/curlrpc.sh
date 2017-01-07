#! /bin/bash
rpc='{"jsonrpc":"2.0","method":"_METHOD_","params":[_PARAMS_],"id":67}'
rpc=${rpc//_METHOD_/$1}
rpc=${rpc//_PARAMS_/$2}
echo $rpc
curl -s -X POST --data ''"$rpc"'' http://localhost:8545 | jq '.'
