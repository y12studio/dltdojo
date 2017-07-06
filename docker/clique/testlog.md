## Testlog 

### docker-compose up

```
$ docker-compose up -d  
$ docker-compose exec node0 ./info.sh cqnet1
```

### docker run

```
$ docker build -t foo .
$ docker run -it -v dltdojo:/dltdojo foo ./build.sh cqnet1 4
=== node0 address/password ===
7b93b78c19110ca9d5ebf054cd00d2721d8b093c
=== node1 address/password ===
546d4c3f33dd2c7f46508df4f641f69bed177327
=== node2 address/password ===
f349e51900327f2fe58a762b7a9259c2ec4ddcec
=== node3 address/password ===
7c3eb0c3493060f78c4f71fef410e9143f7d6605
=== node4 address/password ===
81e6ce98f95f05c5b5bfd563d643fa63333f9019
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
> cqnet1
Sweet, you can set this via --network=cqnet1 next time!

INFO [07-06|08:54:17] Administering Ethereum network           name=cqnet1
WARN [07-06|08:54:17] No previous configurations found         path=/root/.puppeth/cqnet1

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
> 0x7b93b78c19110ca9d5ebf054cd00d2721d8b093c
> 0x

Which accounts should be pre-funded? (advisable at least one)
> 0x7b93b78c19110ca9d5ebf054cd00d2721d8b093c
> 0x


Specify your chain/network ID if you want an explicit one (default = random)
>

Anything fun to embed into the genesis block? (max 32 bytes)
> hha

What would you like to do? (default = stats)
 1. Show network stats
 2. Save existing genesis
 3. Track new remote server
 4. Deploy network components
> 2

Which file to save the genesis into? (default = cqnet1.json)
>
INFO [07-06|08:54:39] Exported existing genesis block

What would you like to do? (default = stats)
 1. Show network stats
 2. Save existing genesis
 3. Track new remote server
 4. Deploy network components
> ^C/dltdojo
└── cqnet1
    ├── cqnet1.json
    ├── node0
    │   ├── UTC--2017-07-06T08-54-07.470985855Z--7b93b78c19110ca9d5ebf054cd00d2721d8b093c
    │   └── passfile
    ├── node1
    │   ├── UTC--2017-07-06T08-54-08.236413669Z--546d4c3f33dd2c7f46508df4f641f69bed177327
    │   └── passfile
    ├── node2
    │   ├── UTC--2017-07-06T08-54-09.005815810Z--f349e51900327f2fe58a762b7a9259c2ec4ddcec
    │   └── passfile
    ├── node3
    │   ├── UTC--2017-07-06T08-54-09.780163210Z--7c3eb0c3493060f78c4f71fef410e9143f7d6605
    │   └── passfile
    └── node4
        ├── UTC--2017-07-06T08-54-10.548108255Z--81e6ce98f95f05c5b5bfd563d643fa63333f9019
        └── passfile

10 directories, 18 files
=== cqnet1.json ===
{
  "chainId": 27195,
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


$ docker run -it -v dltdojo:/dltdojo foo ./info.sh cqnet1
/dltdojo
└── cqnet1
    ├── cqnet1.json
    ├── node0
    │   ├── UTC--2017-07-06T08-54-07.470985855Z--7b93b78c19110ca9d5ebf054cd00d2721d8b093c
    │   └── passfile
    ├── node1
    │   ├── UTC--2017-07-06T08-54-08.236413669Z--546d4c3f33dd2c7f46508df4f641f69bed177327
    │   └── passfile
    ├── node2
    │   ├── UTC--2017-07-06T08-54-09.005815810Z--f349e51900327f2fe58a762b7a9259c2ec4ddcec
    │   └── passfile
    ├── node3
    │   ├── UTC--2017-07-06T08-54-09.780163210Z--7c3eb0c3493060f78c4f71fef410e9143f7d6605
    │   └── passfile
    └── node4
        ├── UTC--2017-07-06T08-54-10.548108255Z--81e6ce98f95f05c5b5bfd563d643fa63333f9019
        └── passfile

10 directories, 18 files
=== node0 address/password ===
0x7b93b78c19110ca9d5ebf054cd00d2721d8b093c
MDFiYTQ3MTljODBi
=== node1 address/password ===
0x546d4c3f33dd2c7f46508df4f641f69bed177327
MDFiYTQ3MTljODBi
=== node2 address/password ===
0xf349e51900327f2fe58a762b7a9259c2ec4ddcec
MDFiYTQ3MTljODBi
=== node3 address/password ===
0x7c3eb0c3493060f78c4f71fef410e9143f7d6605
MDFiYTQ3MTljODBi
=== node4 address/password ===
0x81e6ce98f95f05c5b5bfd563d643fa63333f9019
MDFiYTQ3MTljODBi
{
  "chainId": 27195,
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