### 2017-04-12T14:57:21+0800

* Monax | Tutorials | Getting Started https://monax.io/docs/getting-started/

```
$ git clone -b release-0.16 --single-branch https://github.com/hyperledger/burrow.git
$ cd burrow
$ make build_docker_db
$ docker images | grep monax
quay.io/monax/db   0.16.2   af3aa1ed2ff4        About a minute ago   68.6 MB
$ docker run -it --rm quay.io/monax/db:0.16.2 burrow -h
burrow is the node server of a burrow chain.
...
VERSION:
 0.16.2
$ docker run -it --rm quay.io/monax/db:0.16.2
Fatal error reading configuration from /home/monax/.monax/config.toml
```

create test_chain blockchain

```
$ monax init
$ monax chains make bobchain
The marmots care about your safety and no longer export the generated private keys onto your local host. If you do want accounts.json to contain the private keys for use in a development environment, please make your chain with `--unsafe` to write the private keys to disk.  This option will be deprecated once the javascript libraries implements a remote signing path as tooling does.
$ tree ~/.monax/chains/bobchain/
├── accounts.csv
├── accounts.json
├── addresses.csv
├── bobchain_full_000
│   ├── config.toml
│   ├── genesis.json
│   └── priv_validator.json
└── validators.csv

1 directory, 7 files
```

start the burrow node

```
$ docker run -it --rm -v ~/.monax/chains/bobchain/bobchain_full_000:/tmp/chain quay.io/monax/db:0.16.2 burrow serve --work-dir /tmp/chain
...
INFO[04-12|08:13:17] enterCommit(381/0). Current: 381/0/RoundStepPrecommit module=consensus
NOTE[04-12|08:13:17] Finalizing commit of block with 0 txs    module=consensus height=381 hash=0FC41A25EA96F2D55EACA5F5536E8B9416F45689 root=6BF3CD8FE568C40184871723B5C3EB09DC95B5C0
INFO[04-12|08:13:17] Block{
  Header{
    ChainID:        test_chain
    Height:         381
    Time:           2017-04-12 08:13:17.518 +0000 UTC
    NumTxs:         0
    LastBlockID:    485E4B271E9F8194126F4DF4B7D83C44369D380B:1:5B67C8FCB4A1
    LastCommit:     9DC9ACBFB53F8BF690377B8B8C13022223F4DF6B
    Data:
    Validators:     88B94A59A336AEA7F9F14D7575C10902783273DA
    App:            6BF3CD8FE568C40184871723B5C3EB09DC95B5C0
  }#0FC41A25EA96F2D55EACA5F5536E8B9416F45689
  Data{

  }#
  Commit{
    BlockID:    485E4B271E9F8194126F4DF4B7D83C44369D380B:1:5B67C8FCB4A1
    Precommits: Vote{0:BD31736FF8A6 380/00/2(Precommit) 485E4B271E9F /7FCC0FE72F77.../}
  }#9DC9ACBFB53F8BF690377B8B8C13022223F4DF6B
}#0FC41A25EA96F2D55EACA5F5536E8B9416F45689 module=consensus

$ tree ~/.monax/chains/bobchain/
├── accounts.csv
├── accounts.json
├── addresses.csv
├── bobchain_full_000
│   ├── config.toml
│   ├── data
│   │   ├── burrowmint
│   │   │   └── data
│   │   │       └── burrowmint.db
│   │   │           ├── 000001.log
│   │   │           ├── CURRENT
│   │   │           ├── LOCK
│   │   │           ├── LOG
│   │   │           └── MANIFEST-000000
│   │   └── tendermint
│   │       └── data
│   │           ├── blockstore.db
│   │           │   ├── 000001.log
│   │           │   ├── CURRENT
│   │           │   ├── LOCK
│   │           │   ├── LOG
│   │           │   └── MANIFEST-000000
│   │           ├── cs.wal
│   │           │   └── wal
│   │           ├── mempool.wal
│   │           │   └── wal
│   │           └── state.db
│   │               ├── 000001.log
│   │               ├── CURRENT
│   │               ├── LOCK
│   │               ├── LOG
│   │               └── MANIFEST-000000
│   ├── genesis.json
│   ├── priv_validator.json
│   └── priv_validator.json.bak
└── validators.csv

11 directories, 25 files

```
