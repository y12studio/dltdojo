### 2017-01-23T22:02:13+0800
```
$ build
$ drun bitcoind --help
Bitcoin version 0.3.24-beta

Usage:
  bitcoin [options]
  bitcoin [options] <command> [params]  Send command to -server or bitcoind
  bitcoin [options] help                List commands
  bitcoin [options] help <command>      Get help for a command
Options:
  -conf=<file>       Specify configuration file (default: bitcoin.conf)
  -pid=<file>        Specify pid file (default: bitcoind.pid)
  -gen               Generate coins
  -gen=0             Don't generate coins
  -min               Start minimized
  -datadir=<dir>     Specify data directory
  -timeout=<n>       Specify connection timeout (in milliseconds)
  -proxy=<ip:port>   Connect through socks4 proxy
  -dns               Allow DNS lookups for addnode and connect
  -addnode=<ip>      Add a node to connect to
  -connect=<ip>      Connect only to the specified node
  -nolisten          Don't accept connections from outside
  -upnp              Attempt to use UPnP to map the listening port
  -paytxfee=<amt>    Fee per KB to add to transactions you send
  -daemon            Run in the background as a daemon and accept commands
  -testnet           Use the test network
  -rpcuser=<user>    Username for JSON-RPC connections
  -rpcpassword=<pw>  Password for JSON-RPC connections
  -rpcport=<port>    Listen for JSON-RPC connections on <port> (default: 8332)
  -rpcallowip=<ip>   Allow JSON-RPC connections from specified IP address
  -rpcconnect=<ip>   Send commands to node running on <ip> (default: 127.0.0.1)
  -keypool=<n>       Set key pool size to <n> (default: 100)
  -rescan            Rescan the block chain for missing wallet transactions

SSL options: (see the Bitcoin Wiki for SSL setup instructions)
  -rpcssl                                  Use OpenSSL (https) for JSON-RPC connections
  -rpcsslcertificatechainfile=<file.cert>  Server certificate file (default: server.cert)
  -rpcsslprivatekeyfile=<file.pem>         Server private key (default: server.pem)
  -rpcsslciphers=<ciphers>                 Acceptable ciphers (default: TLSv1+HIGH:!SSLv2:!aNULL:!eNULL:!AH:!3DES:@STRENGTH)
  -?                 This help message
```
