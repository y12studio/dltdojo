## Testlog 

### docker-compose up

```
$ docker-compose up -d  
$ docker-compose exec node0 ./info.sh
$ docker-compose exec node1 ./info.sh
/dltdojo
└── clique
    ├── node0
    │   ├── UTC--2017-07-05T14-19-02.186248516Z--666a35a925271afddafc7b65d25a06929ccc96a8
    │   └── passfile
    ├── node1
    │   ├── UTC--2017-07-05T14-19-02.931825073Z--3082048af08b4069428c3e6534845061ec47fe83
    │   └── passfile
    ├── node2
    │   ├── UTC--2017-07-05T14-19-03.681718563Z--d4aebadda8b527b0152ac917e23adf7a7ac33200
    │   └── passfile
    └── poa-clique.json

4 directories, 7 files
=== node0 address/password ===
0x666a35a925271afddafc7b65d25a06929ccc96a8
MDFiYTQ3MTljODBi
=== node1 address/password ===
0x3082048af08b4069428c3e6534845061ec47fe83
YmVjOTdlODMyZDk2
=== node2 address/password ===
0xd4aebadda8b527b0152ac917e23adf7a7ac33200
NzU1NmZjOTZkZDNh
=== poa-clique.json ===
{
  "chainId": 28541,
  "homesteadBlock": 1,
  "eip150Block": 2,
  "eip150Hash": "0x0000000000000000000000000000000000000000000000000000000000000000",
  "eip155Block": 3,
  "eip158Block": 3,
  "clique": {
    "period": 15,
    "epoch": 30000
  }
}

```

### docker run

```
$ docker build -t foo .
$ docker run -it -v dltdojo:/dltdojo foo ./build.sh
/dltdojo
└── clique
    ├── node0
    │   ├── UTC--2017-07-05T14-19-02.186248516Z--666a35a925271afddafc7b65d25a06929ccc96a8
    │   └── passfile
    ├── node1
    │   ├── UTC--2017-07-05T14-19-02.931825073Z--3082048af08b4069428c3e6534845061ec47fe83
    │   └── passfile
    └── node2
        ├── UTC--2017-07-05T14-19-03.681718563Z--d4aebadda8b527b0152ac917e23adf7a7ac33200
        └── passfile

4 directories, 6 files
=== node0 address/password ===
666a35a925271afddafc7b65d25a06929ccc96a8
=== node1 address/password ===
3082048af08b4069428c3e6534845061ec47fe83
=== node2 address/password ===
d4aebadda8b527b0152ac917e23adf7a7ac33200
+-----------------------------------------------------------+
| Welcome to puppeth, your Ethereum private network manager |
|                                                           |
| This tool lets you create a new Ethereum network down to  |
| the genesis block, bootnodes, miners and ethstats servers |
| without the hassle that it would normally entail.         |
|                                                           |
| Puppeth uses SSH to dial in to remote servers, and builds |
| its network components out of Docker containers using the |
| docker-compose toolset.                                   |
+-----------------------------------------------------------+

Please specify a network name to administer (no spaces, please)
> hello
Sweet, you can set this via --network=hello next time!

INFO [07-05|14:19:22] Administering Ethereum network           name=hello
WARN [07-05|14:19:22] No previous configurations found         path=/root/.puppeth/hello

What would you like to do? (default = stats)
 1. Show network stats
 2. Configure new genesis
 3. Track new remote server
 4. Deploy network components
> 2

Which consensus engine to use? (default = clique)
 1. Ethash - proof-of-work
 2. Clique - proof-of-authority
> 2

How many seconds should blocks take? (default = 15)
>

Which accounts are allowed to seal? (mandatory at least one)
> 0x666a35a925271afddafc7b65d25a06929ccc96a8
> 0x

Which accounts should be pre-funded? (advisable at least one)
> 0x666a35a925271afddafc7b65d25a06929ccc96a8
> 0x3082048af08b4069428c3e6534845061ec47fe83
> 0x


Specify your chain/network ID if you want an explicit one (default = random)
>

Anything fun to embed into the genesis block? (max 32 bytes)
> DLTDOJO

What would you like to do? (default = stats)
 1. Show network stats
 2. Save existing genesis
 3. Track new remote server
 4. Deploy network components
> 2

Which file to save the genesis into? (default = hello.json)
> poa-clique.json
INFO [07-05|14:20:23] Exported existing genesis block

What would you like to do? (default = stats)
 1. Show network stats
 2. Save existing genesis
 3. Track new remote server
 4. Deploy network components
> ^C=== poa-clique.json ===
{
  "chainId": 28541,
  "homesteadBlock": 1,
  "eip150Block": 2,
  "eip150Hash": "0x0000000000000000000000000000000000000000000000000000000000000000",
  "eip155Block": 3,
  "eip158Block": 3,
  "clique": {
    "period": 15,
    "epoch": 30000
  }
}


$ docker run -it -v dltdojo:/dltdojo foo ./info.sh
/dltdojo
└── clique
    ├── node0
    │   ├── UTC--2017-07-05T14-19-02.186248516Z--666a35a925271afddafc7b65d25a06929ccc96a8
    │   └── passfile
    ├── node1
    │   ├── UTC--2017-07-05T14-19-02.931825073Z--3082048af08b4069428c3e6534845061ec47fe83
    │   └── passfile
    ├── node2
    │   ├── UTC--2017-07-05T14-19-03.681718563Z--d4aebadda8b527b0152ac917e23adf7a7ac33200
    │   └── passfile
    └── poa-clique.json

4 directories, 7 files
=== node0 address/password ===
0x666a35a925271afddafc7b65d25a06929ccc96a8
MDFiYTQ3MTljODBi
=== node1 address/password ===
0x3082048af08b4069428c3e6534845061ec47fe83
YmVjOTdlODMyZDk2
=== node2 address/password ===
0xd4aebadda8b527b0152ac917e23adf7a7ac33200
NzU1NmZjOTZkZDNh
=== poa-clique.json ===
{
  "chainId": 28541,
  "homesteadBlock": 1,
  "eip150Block": 2,
  "eip150Hash": "0x0000000000000000000000000000000000000000000000000000000000000000",
  "eip155Block": 3,
  "eip158Block": 3,
  "clique": {
    "period": 15,
    "epoch": 30000
  }
}

```