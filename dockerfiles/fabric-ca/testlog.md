### 2017-04-15T21:17:14+0800

Customize the ca-cert.pem.

```
$ docker run -it --rm -v `pwd`:/etc/hyperledger/fabric-ca-server hyperledger/fabric-ca fabric-ca-server init -b admin:adminpw
2017/04/15 13:51:45 [INFO] Created default configuration file at /etc/hyperledger/fabric-ca-server/fabric-ca-server-config.yaml
2017/04/15 13:51:45 Initialize BCCSP [SW]
2017/04/15 13:51:45 [INFO] generate received request
2017/04/15 13:51:45 [INFO] received CSR
2017/04/15 13:51:45 [INFO] generating key: ecdsa-256
2017/04/15 13:51:45 [INFO] encoded CSR
2017/04/15 13:51:45 [INFO] signed certificate with serial number 425765915674071811134323474142215366772978178578
2017/04/15 13:51:45 [INFO] The CA key and certificate files were generated
2017/04/15 13:51:45 [INFO] Key file location: /etc/hyperledger/fabric-ca-server/ca-key.pem
2017/04/15 13:51:45 [INFO] Certificate file location: /etc/hyperledger/fabric-ca-server/ca-cert.pem
2017/04/15 13:51:45 [INFO] Initialized sqlite3 data base at /etc/hyperledger/fabric-ca-server/fabric-ca-server.db
2017/04/15 13:51:45 [INFO] Initialization was successful
$ ll
total 60
drwxrwxr-x  2 lin  lin   4096 Apr 15 21:51 ./
drwxrwxr-x 50 lin  lin   4096 Apr 15 18:20 ../
-rw-r--r--  1 root root   782 Apr 15 21:51 ca-cert.pem
-rw-------  1 root root   227 Apr 15 21:51 ca-key.pem
-rw-r--r--  1 root root  7323 Apr 15 21:51 fabric-ca-server-config.yaml
-rw-r--r--  1 root root 20480 Apr 15 21:51 fabric-ca-server.db
-rw-rw-r--  1 lin  lin    307 Apr 15 18:54 README.md
-rw-rw-r--  1 lin  lin   8340 Apr 15 21:48 testlog.md
$ sudo rm ca-cert.pem
$ sudo rm ca-key.pem
$ nano fabric-ca-server-config.yaml

csr:
   cn: dltdojo-ca-server
   names:
      - C: TW
        ST: "Taichung City"
        L: Taichung
        O: DLTDOJO
        OU: "Hyperledger Fabric CA"
   hosts:
     - 5402095751fa
   ca:
      pathlen:
      pathlenzero:
      expiry:
$ docker run -it --rm -v `pwd`:/etc/hyperledger/fabric-ca-server hyperledger/fabric-ca fabric-ca-server init -b admin:adminpw
$ ll
-rw-r--r--  1 root root   867 Apr 15 21:58 ca-cert.pem
-rw-------  1 root root   227 Apr 15 21:58 ca-key.pem
-rw-rw-r--  1 lin  lin   7344 Apr 15 21:57 fabric-ca-server-config.yaml
-rw-r--r--  1 root root 20480 Apr 15 21:58 fabric-ca-server.db
-rw-rw-r--  1 lin  lin    307 Apr 15 18:54 README.md
-rw-rw-r--  1 lin  lin   8313 Apr 15 21:58 testlog.md
$ openssl x509 -in ca-cert.pem -text -noout -serial
Certificate:
    Data:
        Version: 3 (0x2)
        Serial Number:
            13:ad:a4:42:65:39:ad:1b:e2:d3:22:58:77:f7:5b:e9:d3:aa:89:f6
    Signature Algorithm: ecdsa-with-SHA256
        Issuer: C=TW, ST=Taichung City, L=Taichung, O=DLTDOJO, OU=Hyperledger Fabric CA, CN=dltdojo-ca-server
        Validity
            Not Before: Apr 15 13:54:00 2017 GMT
            Not After : Apr 14 13:54:00 2022 GMT
        Subject: C=TW, ST=Taichung City, L=Taichung, O=DLTDOJO, OU=Hyperledger Fabric CA, CN=dltdojo-ca-server
        Subject Public Key Info:
            Public Key Algorithm: id-ecPublicKey
                Public-Key: (256 bit)
                pub:
                    04:a6:28:72:d6:50:47:2f:dc:5e:ff:4d:c3:09:b6:
                    b6:dc:ed:d7:57:ed:fe:9a:ad:22:4a:8c:54:8f:6b:
                    15:c3:00:c0:2f:c2:71:5d:f0:8c:e3:50:ea:75:3d:
                    89:f1:76:c9:9c:98:08:69:6b:37:11:b0:f1:73:82:
                    c5:29:ee:46:6b
                ASN1 OID: prime256v1
        X509v3 extensions:
            X509v3 Key Usage: critical
                Certificate Sign, CRL Sign
            X509v3 Basic Constraints: critical
                CA:TRUE
            X509v3 Subject Key Identifier:
                69:02:5F:B0:C6:1F:89:BF:39:4D:2F:5B:10:D6:AF:64:09:F3:6E:6E
    Signature Algorithm: ecdsa-with-SHA256
         30:45:02:20:10:8f:03:c2:aa:a8:b1:a7:ca:41:00:37:33:1c:
         5a:73:18:b4:09:39:67:47:70:b9:ff:09:f5:1b:3d:5f:37:34:
         02:21:00:e8:2d:82:fc:b7:54:b8:7c:4f:9d:ad:2c:aa:a6:46:
         7b:27:2b:f0:7e:c0:f6:8c:f8:28:04:16:b4:53:96:d8:a2
serial=13ADA4426539AD1BE2D3225877F75BE9D3AA89F6

```

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
