### 2017-01-23T11:37:59+0800
```
$ build
$ dcup
$ dc logs
Attaching to devxcp_xcp1_1, devxcp_xcp2_1
xcp1_1  | Bitcoin server starting
xcp2_1  | Bitcoin server starting
xcp1_1  | [2017-01-23 03:43:42][INFO] Running v1.1.2 of counterparty-server.
xcp2_1  | [2017-01-23 03:43:42][INFO] Running v1.1.2 of counterparty-server.
xcp2_1  | [2017-01-23 03:43:42][INFO] Running v9.55.1 of counterparty-lib.
xcp2_1  | [2017-01-23 03:43:42][INFO] Acquiring lock.
xcp2_1  | [2017-01-23 03:43:42][INFO] Connecting to database.
xcp2_1  | [2017-01-23 03:43:42][INFO] Connecting to backend.
xcp2_1  | [2017-01-23 03:43:42][INFO] Starting API Server.
xcp2_1  | [2017-01-23 03:43:43][WARNING] New database.
xcp2_1  | [2017-01-23 03:43:43][INFO] Resuming parsing.
xcp2_1  | [2017-01-23 03:43:43][INFO] Mempool cache initialized: 0.00s for 0 transactions
xcp2_1  | [2017-01-23 03:43:43][INFO] Ready for queries.
xcp1_1  | [2017-01-23 03:43:42][INFO] Running v9.55.1 of counterparty-lib.
xcp1_1  | [2017-01-23 03:43:42][INFO] Acquiring lock.
xcp1_1  | [2017-01-23 03:43:42][INFO] Connecting to database.
xcp1_1  | [2017-01-23 03:43:42][INFO] Connecting to backend.
xcp1_1  | [2017-01-23 03:43:42][INFO] Starting API Server.
xcp1_1  | [2017-01-23 03:43:43][WARNING] New database.
xcp1_1  | [2017-01-23 03:43:43][INFO] Resuming parsing.
xcp1_1  | [2017-01-23 03:43:43][INFO] Mempool cache initialized: 0.00s for 0 transactions
xcp1_1  | [2017-01-23 03:43:43][INFO] Ready for queries.
$ cli1 getinfo
[2017-01-23 03:48:47][INFO] Running v1.1.2 of counterparty-client.
Unhandled Exception
Traceback (most recent call last):
  File "/usr/local/bin/counterparty-client", line 9, in <module>
    load_entry_point('counterparty-cli==1.1.2', 'console_scripts', 'counterparty-client')()
  File "/xcp/counterparty-cli/counterpartycli/__init__.py", line 12, in client_main
    client.main()
  File "/xcp/counterparty-cli/counterpartycli/client.py", line 247, in main
    view = console.get_view(args.action, args)
  File "/xcp/counterparty-cli/counterpartycli/console.py", line 16, in get_view
    return util.api('get_running_info')
  File "/xcp/counterparty-cli/counterpartycli/util.py", line 92, in api
    return rpc(config.COUNTERPARTY_RPC, method, params=params, ssl_verify=config.COUNTERPARTY_RPC_SSL_VERIFY)
  File "/xcp/counterparty-cli/counterpartycli/util.py", line 82, in rpc
    raise RPCError(str(response.status_code) + ' ' + response.reason + ' ' + response.text)
counterpartycli.util.RPCError: 503 SERVICE UNAVAILABLE {"data": "Bitcoind is running about 52349 hours behind.", "message": "Server error", "code": -32000}
```
### 2017-01-23T09:06:09+0800
https://github.com/CounterpartyXCP/counterparty-lib

https://github.com/CounterpartyXCP/counterparty-cli/issues/104
```
$ build
$ drun bitcoind --version
Bitcoin Core Daemon version v0.12.1-addrindex
Copyright (C) 2009-2016 The Bitcoin Core Developers
$ drun bitcoin-cli --version
Bitcoin Core RPC client version v0.12.1-addrindex

$ dcup
Name                 Command            State   Ports
---------------------------------------------------------
devxcp_xcp1_1   counterparty-server start   Up
devxcp_xcp2_1   counterparty-server start   Up
$ cli1 getinfo
Traceback (most recent call last):
  File "/usr/local/bin/counterparty-client", line 9, in <module>
    load_entry_point('counterparty-cli==1.1.2', 'console_scripts', 'counterparty-client')()
  File "/xcp/counterparty-cli-1.1.2/counterpartycli/__init__.py", line 12, in client_main
    client.main()
  File "/xcp/counterparty-cli-1.1.2/counterpartycli/client.py", line 73, in main
    subparsers = parser.add_subparsers(dest='action', help='the action to be taken')
AttributeError: 'NoneType' object has no attribute 'add_subparsers'
$ dcend

```
