### Sun Jan 22 11:51:18 CST 2017
```
$ go get github.com/go-sql-driver/mysql
$ go get github.com/lib/pq
$ cd $GOPATH/src/github.com/hyperledger
$ git clone --single-branch -b master --depth 1 https://github.com/hyperledger/fabric-ca.git
$ cd fabric-ca ; make docker
$ docker images | grep fabric-ca
hyperledger/fabric-ca latest                          b4166a96488a        17 minutes ago      27.68 MB
hyperledger/fabric-ca x86_64-0.7.0-snapshot-aa5fb82   b4166a96488a        17 minutes ago      27.68 MB
hyperledger/fabric-ca-runtime latest                          8338bbeda6fb        17 minutes ago      5.055 MB
hyperledger/fabric-ca-runtime x86_64-0.7.0-snapshot-aa5fb82   8338bbeda6fb        17 minutes ago      5.055 MB
$ docker run -it hyperledger/fabric-ca fabric-ca --help
fabric-ca client       - client-related commands
fabric-ca server       - server related commands
fabric-ca cfssl        - all cfssl commands

For help, type "fabric-ca client", "fabric-ca server", or "fabric-ca cfssl".
$ docker run -it hyperledger/fabric-ca fabric-ca client --help
Usage:
Available commands:
        register
        enroll
        reenroll
        revoke
Top-level flags:
  -allow_verification_with_non_compliant_keys
        Allow a SignatureVerifier to use keys which are technically non-compliant with RFC6962.

$ docker run -it hyperledger/fabric-ca ls /etc/hyperledger/fabric-ca
README.md           csr.json
client-config.json  server-config.json
$ docker run -it hyperledger/fabric-ca cat /etc/hyperledger/fabric-ca/csr.json
{
    "hosts": [
        "myhost.com",
        "www.myhost.com"
    ],
    "CN": "admin",
    "key": {
        "algo": "ecdsa",
        "size": 256
    },
    "names": [
        {
            "O": "Hyperledger Fabric",
            "OU": "Fabric CA",
            "L": "Raleigh",
            "ST": "North Carolina",
            "C": "US"
        }
    ]
}
$ docker run -it hyperledger/fabric-ca cat /etc/hyperledger/fabric-ca/server-config.json
{
 "tls_disable":true,
 "ca_cert":"/.fabric-ca/ec.pem",
 "ca_key":"/.fabric-ca/ec-key.pem",
 "users": {
    "admin": {
      "pass": "adminpw",
      "type": "client",
      "group": "bank_a",
      "attrs": [{"name":"hf.Registrar.Roles","value":"client,peer,validator,auditor"}, {"name":"hf.Registrar.DelegateRoles", "value": "client"}]
    }
 },
 "groups": {
   "banks_and_institutions": {
     "banks": ["bank_a", "bank_b", "bank_c"],
     "institutions": ["institution_a"]
   }
 },
 "signing": {
    "default": {
       "usages": ["cert sign"],
       "expiry": "8000h"
    }
 }
}
```
