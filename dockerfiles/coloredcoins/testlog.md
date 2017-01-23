#### 2017-01-23T12:52:28+0800
```
$ build
$ dcup
Name           Command    State   Ports
---------------------------------------------
devccoin_ccoin1_1   /start.sh   Up
devccoin_ccoin2_1   /start.sh   Up
$ dc logs
ccoin1_1  | [2017-01-23 04:45:45.628] [DEBUG] console - Routes metadata: [{"path":"/v3/sendasset","function_name":"sendasset","version":"v3"},{"path":"/v3/burnasset","function_name":"burnasset","version":"v3"},{"path":"/v3/issue","function_name":"issue","version":"v3"},{"path":"/v3/broadcast","function_name":"broadcast","version":"v3"},{"path":"/v3/assetmetadata","function_name":"assetmetadata","version":"v3"},{"path":"/v3/addressinfo","function_name":"addressinfo","version":"v3"},{"path":"/v3/stakeholders","function_name":"stakeholders","version":"v3"},{"path":"/v2/issue","function_name":"issue","version":"v2"},{"path":"/v2/sendasset","function_name":"sendasset","version":"v2"},{"path":"/v2/broadcast","function_name":"broadcast","version":"v2"},{"path":"/v2/assetmetadata","function_name":"assetmetadata","version":"v2"},{"path":"/v2/addressinfo","function_name":"addressinfo","version":"v2"},{"path":"/v2/stakeholders","function_name":"stakeholders","version":"v2"},{"path":"/sendasset","function_name":"sendasset","version":"v3"},{"path":"/burnasset","function_name":"burnasset","version":"v3"},{"path":"/issue","function_name":"issue","version":"v3"},{"path":"/broadcast","function_name":"broadcast","version":"v3"},{"path":"/assetmetadata","function_name":"assetmetadata","version":"v3"},{"path":"/addressinfo","function_name":"addressinfo","version":"v3"},{"path":"/stakeholders","function_name":"stakeholders","version":"v3"}]
ccoin1_1  | [2017-01-23 04:45:45.634] [DEBUG] console - Server is listening to *:8080
$ dcend
```
