### 2017-04-15T18:25:46+0800

```
$ go get -u github.com/hyperledger/fabric-ca/cmd/...
$ cd $GOPATH/src/github.com/hyperledger/fabric-ca
$ make docker
$ cd docker/server
$ cat docker-compose.yml

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
$ tree
.
├── docker-compose.yml
└── fabric-ca-server
    ├── ca-cert.pem
    ├── ca-key.pem
    ├── fabric-ca-server-config.yaml
    └── fabric-ca-server.db
$ cat fabric-ca-server/ca-cert.pem
-----BEGIN CERTIFICATE-----
MIICEzCCAbqgAwIBAgIUUjcqbl/mVROnDoQQwRvGHmSGrBowCgYIKoZIzj0EAwIw
aDELMAkGA1UEBhMCVVMxFzAVBgNVBAgTDk5vcnRoIENhcm9saW5hMRQwEgYDVQQK
EwtIeXBlcmxlZGdlcjEPMA0GA1UECxMGRmFicmljMRkwFwYDVQQDExBmYWJyaWMt
Y2Etc2VydmVyMB4XDTE3MDMyNDA1NDAwMFoXDTIyMDMyMzA1NDAwMFowaDELMAkG
A1UEBhMCVVMxFzAVBgNVBAgTDk5vcnRoIENhcm9saW5hMRQwEgYDVQQKEwtIeXBl
cmxlZGdlcjEPMA0GA1UECxMGRmFicmljMRkwFwYDVQQDExBmYWJyaWMtY2Etc2Vy
dmVyMFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEC8j+wlBDL5nsSK1mJYSZo3MO
KbNX+V3Bgs5At0MkzSY+OmZyFLt1IRBI3NTuWJJrgw+ekZa4mRwZMIp/JpwPeaNC
MEAwDgYDVR0PAQH/BAQDAgEGMA8GA1UdEwEB/wQFMAMBAf8wHQYDVR0OBBYEFBPW
tREUlQbzqVa8Naet7tHI3epDMAoGCCqGSM49BAMCA0cAMEQCIDX9eYkgcqKtPJjT
pLJlrGBu2JwW45Eby37KhdhhyE9ZAiB4X9rusf+gWyns6LFKyQ4Yzz9RGfsCgN8n
Ciw7GeoS0w==
-----END CERTIFICATE-----
$ openssl x509 -in fabric-ca-server/ca-cert.pem -text -noout -serial
Certificate:
    Data:
        Version: 3 (0x2)
        Serial Number:
            52:37:2a:6e:5f:e6:55:13:a7:0e:84:10:c1:1b:c6:1e:64:86:ac:1a
    Signature Algorithm: ecdsa-with-SHA256
        Issuer: C=US, ST=North Carolina, O=Hyperledger, OU=Fabric, CN=fabric-ca-server
        Validity
            Not Before: Mar 24 05:40:00 2017 GMT
            Not After : Mar 23 05:40:00 2022 GMT
        Subject: C=US, ST=North Carolina, O=Hyperledger, OU=Fabric, CN=fabric-ca-server
        Subject Public Key Info:
            Public Key Algorithm: id-ecPublicKey
                Public-Key: (256 bit)
                pub:
                    04:0b:c8:fe:c2:50:43:2f:99:ec:48:ad:66:25:84:
                    99:a3:73:0e:29:b3:57:f9:5d:c1:82:ce:40:b7:43:
                    24:cd:26:3e:3a:66:72:14:bb:75:21:10:48:dc:d4:
                    ee:58:92:6b:83:0f:9e:91:96:b8:99:1c:19:30:8a:
                    7f:26:9c:0f:79
                ASN1 OID: prime256v1
        X509v3 extensions:
            X509v3 Key Usage: critical
                Certificate Sign, CRL Sign
            X509v3 Basic Constraints: critical
                CA:TRUE
            X509v3 Subject Key Identifier:
                13:D6:B5:11:14:95:06:F3:A9:56:BC:35:A7:AD:EE:D1:C8:DD:EA:43
    Signature Algorithm: ecdsa-with-SHA256
         30:44:02:20:35:fd:79:89:20:72:a2:ad:3c:98:d3:a4:b2:65:
         ac:60:6e:d8:9c:16:e3:91:1b:cb:7e:ca:85:d8:61:c8:4f:59:
         02:20:78:5f:da:ee:b1:ff:a0:5b:29:ec:e8:b1:4a:c9:0e:18:
         cf:3f:51:19:fb:02:80:df:27:0a:2c:3b:19:ea:12:d3
serial=52372A6E5FE65513A70E8410C11BC61E6486AC1A

$ sudo cat fabric-ca-server/ca-key.pem
-----BEGIN EC PRIVATE KEY-----
MHcCAQEEIEA/qHDlDV52BzLBGNkzprmbXmkYnt57jWaQ2WzKIR1PoAoGCCqGSM49
AwEHoUQDQgAEC8j+wlBDL5nsSK1mJYSZo3MOKbNX+V3Bgs5At0MkzSY+OmZyFLt1
IRBI3NTuWJJrgw+ekZa4mRwZMIp/JpwPeQ==
-----END EC PRIVATE KEY-----

$ docker run -it --rm hyperledger/fabric-ca bash
#  fabric-ca-server init -b admin:adminpw
2017/04/15 10:50:10 [INFO] Created default configuration file at /etc/hyperledger/fabric-ca-server/fabric-ca-server-config.yaml
2017/04/15 10:50:10 Initialize BCCSP [SW]
2017/04/15 10:50:10 [INFO] The CA key and certificate files already exist
2017/04/15 10:50:10 [INFO] Key file location: /etc/hyperledger/fabric-ca-server/ca-key.pem
2017/04/15 10:50:10 [INFO] Certificate file location: /etc/hyperledger/fabric-ca-server/ca-cert.pem
2017/04/15 10:50:10 [INFO] Initialized sqlite3 data base at /etc/hyperledger/fabric-ca-server/fabric-ca-server.db
2017/04/15 10:50:10 [INFO] Initialization was successful
# cat /etc/hyperledger/fabric-ca-server/ca-cert.pem
-----BEGIN CERTIFICATE-----
MIICYjCCAgmgAwIBAgIUB3CTDOU47sUC5K4kn/Caqnh114YwCgYIKoZIzj0EAwIw
fzELMAkGA1UEBhMCVVMxEzARBgNVBAgTCkNhbGlmb3JuaWExFjAUBgNVBAcTDVNh
biBGcmFuY2lzY28xHzAdBgNVBAoTFkludGVybmV0IFdpZGdldHMsIEluYy4xDDAK
BgNVBAsTA1dXVzEUMBIGA1UEAxMLZXhhbXBsZS5jb20wHhcNMTYxMDEyMTkzMTAw
WhcNMjExMDExMTkzMTAwWjB/MQswCQYDVQQGEwJVUzETMBEGA1UECBMKQ2FsaWZv
cm5pYTEWMBQGA1UEBxMNU2FuIEZyYW5jaXNjbzEfMB0GA1UEChMWSW50ZXJuZXQg
V2lkZ2V0cywgSW5jLjEMMAoGA1UECxMDV1dXMRQwEgYDVQQDEwtleGFtcGxlLmNv
bTBZMBMGByqGSM49AgEGCCqGSM49AwEHA0IABKIH5b2JaSmqiQXHyqC+cmknICcF
i5AddVjsQizDV6uZ4v6s+PWiJyzfA/rTtMvYAPq/yeEHpBUB1j053mxnpMujYzBh
MA4GA1UdDwEB/wQEAwIBBjAPBgNVHRMBAf8EBTADAQH/MB0GA1UdDgQWBBQXZ0I9
qp6CP8TFHZ9bw5nRtZxIEDAfBgNVHSMEGDAWgBQXZ0I9qp6CP8TFHZ9bw5nRtZxI
EDAKBggqhkjOPQQDAgNHADBEAiAHp5Rbp9Em1G/UmKn8WsCbqDfWecVbZPQj3RK4
oG5kQQIgQAe4OOKYhJdh3f7URaKfGTf492/nmRmtK+ySKjpHSrU=
-----END CERTIFICATE-----
# fabric-ca-server start -b admin:adminpw
2017/04/15 10:52:16 [INFO] Configuration file location: /etc/hyperledger/fabric-ca-server/fabric-ca-server-config.yaml
2017/04/15 10:52:16 Initialize BCCSP [SW]
2017/04/15 10:52:16 [INFO] The CA key and certificate files already exist
2017/04/15 10:52:16 [INFO] Key file location: /etc/hyperledger/fabric-ca-server/ca-key.pem
2017/04/15 10:52:16 [INFO] Certificate file location: /etc/hyperledger/fabric-ca-server/ca-cert.pem
2017/04/15 10:52:16 [INFO] Initialized sqlite3 data base at /etc/hyperledger/fabric-ca-server/fabric-ca-server.db
2017/04/15 10:52:16 [INFO] Listening at http://0.0.0.0:7054

# exit

$ docker-compose up -d
$ docker-compose ps
      Name             Command             State              Ports
-------------------------------------------------------------------------
fabric-ca-server   sh -c fabric-ca-   Up                 0.0.0.0:7054->70
                   server sta ...                        54/tcp
$ docker-compose stop
Stopping fabric-ca-server ... done
```
