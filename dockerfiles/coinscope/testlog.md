### 2017-02-24T10:22:20+0800
```
$ docker build -t y12docker/dltdojo-coinscope .
$ docker images | grep coinscopey12docker/dltdojo-coinscope  latest  e6280be58aad 20 minutes ago 550 MB
$ docker run -it --rm y12docker/dltdojo-coinscope bash
# cd logserver && ./main &
# cd ../logclient && ./console
limit too low, aborting (524288)

// https://github.com/jameslitton/coinscope/blob/master/connector/src/main.cpp
if (limit.rlim_cur < 999900) {
		cerr << "limit too low, aborting (" << limit.rlim_cur << ")\n";
		return EXIT_FAILURE;
	}
//
```
