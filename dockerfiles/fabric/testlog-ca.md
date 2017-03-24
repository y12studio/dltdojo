### 2017-03-24T13:16:32+0800
* http://hyperledger-fabric.readthedocs.io/en/latest/Setup/ca-setup.html
* https://github.com/hyperledger/fabric-sdk-node/blob/master/test/integration/fabric-ca-services-tests.js
* https://github.com/hyperledger/fabric-sdk-node/tree/master/test/fixtures/fabricca

The following insalls both
```
$ rm -rf $GOPATH/src/github.com/hyperledger/fabric-ca
$ go get -u github.com/hyperledger/fabric-ca/
$ cd $GOPATH/src/github.com/hyperledger/fabric-ca
$ make docker
$ cat docker/server/docker-compose.yml
fabric-ca-server:
   image: hyperledger/fabric-ca
   container_name: fabric-ca-server
   ports:
     - "7054:7054"
   environment:
     - FABRIC_CA_HOME=/etc/hyperledger/fabric-ca-server
   volumes:
     - "./fabric-ca-server:/etc/hyperledger/fabric-ca-server"
   command: sh -c 'fabric-ca-server start -b admin:adminpw'

$ cd docker/server
$ docker-compose up -d
$ docker ps
CONTAINER ID        IMAGE                   COMMAND                  CREATED              STATUS              PORTS                    NAMES
1745cf2ab2ca        hyperledger/fabric-ca   "sh -c 'fabric-ca-..."   About a minute ago   Up 16 seconds       0.0.0.0:7054->7054/tcp   fabric-ca-server
lin@ubuntu73:~/work/src/github.com/hyperledger/fabric-ca/docker/server$ docker-compose ps
      Name             Command             State              Ports
-------------------------------------------------------------------------
fabric-ca-server   sh -c fabric-ca-   Up                 0.0.0.0:7054->70
                   server sta ...                        54/tcp
$ docker-compose exec fabric-ca-server bash

# export FABRIC_CA_CLIENT_HOME=$HOME/fabric-ca/clients/admin
# fabric-ca-client enroll -u http://admin:adminpw@localhost:7054
2017/03/24 05:51:00 [INFO] User provided config file: /root/fabric-ca/clients/admin/fabric-ca-client-config.yaml
2017/03/24 05:51:00 [INFO] Created a default configuration file at /root/fabric-ca/clients/admin/fabric-ca-client-config.yaml
2017/03/24 05:51:00 Initialize BCCSP [SW]
2017/03/24 05:51:00 [INFO] received CSR
2017/03/24 05:51:00 [INFO] generating key: ecdsa-256
2017/03/24 05:51:00 [INFO] encoded CSR
2017/03/24 05:51:00 [INFO] Stored client key at /root/fabric-ca/clients/admin/msp/keystore/key.pem
2017/03/24 05:51:00 [INFO] Stored client certificate at /root/fabric-ca/clients/admin/msp/signcerts/cert.pem
2017/03/24 05:51:00 [INFO] Stored CA certificate chain at /root/fabric-ca/clients/admin/msp/cacerts/.pem
# cat /root/fabric-ca/clients/admin/msp/signcerts/cert.pem
-----BEGIN CERTIFICATE-----
MIICQDCCAeagAwIBAgIUVpAvFEw/dL24W7eY4vCNHFkHiGQwCgYIKoZIzj0EAwIw
aDELMAkGA1UEBhMCVVMxFzAVBgNVBAgTDk5vcnRoIENhcm9saW5hMRQwEgYDVQQK
EwtIeXBlcmxlZGdlcjEPMA0GA1UECxMGRmFicmljMRkwFwYDVQQDExBmYWJyaWMt
Y2Etc2VydmVyMB4XDTE3MDMyNDA1NDYwMFoXDTE4MDIyMDEzNDYwMFowXTELMAkG
A1UEBhMCVVMxFzAVBgNVBAgTDk5vcnRoIENhcm9saW5hMRQwEgYDVQQKEwtIeXBl
cmxlZGdlcjEPMA0GA1UECxMGRmFicmljMQ4wDAYDVQQDEwVhZG1pbjBZMBMGByqG
SM49AgEGCCqGSM49AwEHA0IABKqia/FIDIk++3qfpowD4/TE1byiGHtFE+wNXuQ5
Zm7WetRuV97r28dRvHp0A879327tNaPzJMuES36BDULgrw+jeTB3MA4GA1UdDwEB
/wQEAwICBDAMBgNVHRMBAf8EAjAAMB0GA1UdDgQWBBR9GSRPaSvWgqKoLJjXIovG
nEyDuDAfBgNVHSMEGDAWgBQT1rURFJUG86lWvDWnre7RyN3qQzAXBgNVHREEEDAO
ggwxNzQ1Y2YyYWIyY2EwCgYIKoZIzj0EAwIDSAAwRQIhAM9MvJCpgptyrE1t5FnY
1xw0maoyczZBKYxK4igYRb1VAiB1iw0n14l2nkkaaSmkI90DgCXe4PvhsY/pyS70
lfIw7A==
-----END CERTIFICATE-----

# cat /root/fabric-ca/clients/admin/fabric-ca-client-config.yaml

#############################################################################
#   This is a configuration file for the fabric-ca-client command.
#
#   COMMAND LINE ARGUMENTS AND ENVIRONMENT VARIABLES
#   ------------------------------------------------
#   Each configuration element can be overridden via command line
#   arguments or environment variables.  The precedence for determining
#   the value of each element is as follows:
#   1) command line argument
#      Examples:
#      a) --url https://localhost:7054
#         To set the fabric-ca server url
#                        b) --tls.client.certfile certfile.pem
#                                       To set the client certificate for TLS
#   2) environment variable
#      Examples:
#      a) FABRIC_CA_CLIENT_URL=https://localhost:7054
#         To set the fabric-ca server url
#                        b) FABRIC_CA_CLIENT_TLS_CLIENT_CERTFILE=certfile.pem
#                                       To set the client certificate for TLS
#   3) configuration file
#   4) default value (if there is one)
#      All default values are shown beside each element below.
#
#   FILE NAME ELEMENTS
#   ------------------
#   All filename elements below end with the word "file".
#   For example, see "certfile" and "keyfile" in the "ca" section.
#   The value of each filename element can be a simple filename, a
#   relative path, or an absolute path.  If the value is not an
#   absolute path, it is interpretted as being relative to the location
#   of this configuration file.
#
#############################################################################

#############################################################################
# Client Configuration
#############################################################################

# URL of the Fabric-ca-server (default: http://localhost:7054)
URL: http://localhost:7054

# Membership Service Provider (MSP) directory
# This is useful when the client is used to enroll a peer or orderer, so
# that the enrollment artifacts are stored in the format expected by MSP.
MSPDir:

#############################################################################
#    TLS section for the client's listenting port
#############################################################################
tls:
  # Enable TLS (default: false)
  enabled: false

  # TLS for the client's listenting port
  certfiles:                    # Comma Separated list of root certificate files (e.g. root.pem, root2.pem)
  client:
    certfile:
    keyfile:

#############################################################################
#  Certificate Signing Request section for generating the CSR for
#  an enrollment certificate (ECert)
#############################################################################
csr:
  cn: admin
  names:
    - C: US
      ST: "North Carolina"
      L:
      O: Hyperledger
      OU: Fabric
  hosts:
    - 1745cf2ab2ca
  ca:
    pathlen:
    pathlenzero:
    expiry:

#############################################################################
#  Registration section used to register a new user with fabric-ca server
#############################################################################
id:
  name:
  type:
  group:
  attributes:
    - name:
      value:

#############################################################################
#  Enrollment section used to enroll a user with fabric-ca server
#############################################################################
enrollment:
  hosts:
  profile:
  label:
```

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
