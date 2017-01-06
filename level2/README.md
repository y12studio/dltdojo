# T1

# LOG0106

issue : [bootnodes url] IP address only. DNS name(evp0) are not allowed.

```
// entrypoint: 'tail -f /dev/null'
$ dc ps
   Name                  Command               State          Ports
--------------------------------------------------------------------------
Name                  Command               State          Ports
--------------------------------------------------------------------------
foo2_evp0_1   /geth --datadir=~/.ethereu ...   Up      30303/tcp, 8545/tcp
foo2_evp1_1   tail -f /dev/null                Up      30303/tcp, 8545/tcp
foo2_evp1_2   tail -f /dev/null                Up      30303/tcp, 8545/tcp
foo2_evp1_3   tail -f /dev/null                Up      30303/tcp, 8545/tcp
foo2_evp1_4   tail -f /dev/null                Up      30303/tcp, 8545/tcp
foo2_evp1_5   tail -f /dev/null                Up      30303/tcp, 8545/tcp

$ vp1 bash
bash-4.3# nslookup evp0
nslookup: can't resolve '(null)': Name does not resolve

Name:      evp0
Address 1: 172.23.0.2 foo2_evp0_1.foo2_default
bash-4.3# getent hosts evp0 | cut -d" " -f1
172.23.0.2
bash-4.3# getent hosts evp1
172.23.0.3        evp1  evp1
bash-4.3# getent hosts evp1 | cut -d" " -f1
172.23.0.3

# /start.sh --datadir=~/.ethereum/devchain --rpccorsdomain="*" --networkid=919717 --rpc --bootnodes="enode://288b97262895b1c7ec61cf314c2e2004407d0a5dc77566877aad1f2a36659c8b698f4b56fd06c4a0c0bf007b4cfb3e7122d907da3b005fa90e724441902eb19e@XXX:30303"
```
