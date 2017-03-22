rain princess 雨公主

```
$ sudo pip install -U floyd-cli
$ floyd login
// Copy and paste your authentication token
$ git clone https://github.com/floydhub/fast-style-transfer
$ cd fast-style-transfer
$ floyd init fast-style-transfer
Project "fast-style-transfer" initialized in current directory
$ floyd run --gpu --env keras:py2 --data jq4ZXUCSVer4t65rWeyieG "python style.py --style examples/style/la_muse.jpg --base-model-path /input/pre-trained-tf/la_muse.ckpt --epoch 1 --total-iterations 10 --checkpoint-dir /output"

Creating project run. Total upload size: 22.2MiB
Syncing code ...

RUN ID                  NAME                                 VERSION
----------------------  ---------------------------------  ---------
GNc3QbAtsj6U8yCsNizPgN  y12floydhub/fast-style-transfer:1          1


To view logs enter:
    floyd logs GNc3QbAtsj6U8yCsNizPgN

$ floyd logs GNc3QbAtsj6U8yCsNizPgN
2017-03-21 21:27:49,697 INFO - Preparing to run TaskInstance <TaskInstance: y12floydhub/fast-style-transfer:1 (id: wYnoL4qQv8Z7KiGJpDq8wY) (checksum: ec051eca5364a2503281cb57b1702565) (last update: 2017-03-21 21:27:49.549554) [queued]>
2017-03-21 21:27:49,712 INFO - Starting attempt 1 at 2017-03-21 21:27:49.702845
2017-03-21 21:27:54,030 INFO - adding pip install -r floyd_requirements
2017-03-21 21:27:54,045 INFO - Executing command in container: stdbuf -o0 sh command.sh
2017-03-21 21:27:54,045 INFO - Pulling Docker image: floydhub/tensorflow:latest-gpu-py2
2017-03-21 21:27:58,216 INFO - Starting container...
2017-03-21 21:27:59,334 INFO -
################################################################################

2017-03-21 21:27:59,334 INFO - Run Output:

$ floyd status GNc3QbAtsj6U8yCsNizPgN
RUN ID                  CREATED       STATUS      DURATION(s)  NAME                               INSTANCE      VERSION
----------------------  ------------  --------  -------------  ---------------------------------  ----------  ---------
GNc3QbAtsj6U8yCsNizPgN  a minute ago  running               0  y12floydhub/fast-style-transfer:1  gpu                 1

$ floyd info GNc3QbAtsj6U8yCsNizPgN
-----------  ---------------------------------
Run ID       GNc3QbAtsj6U8yCsNizPgN
Name         y12floydhub/fast-style-transfer:1
Created      2 minutes ago
Status       running
Duration(s)  0
Output ID    wYnoL4qQv8Z7KiGJpDq8wY
Instance     gpu
Version      1
-----------  ---------------------------------

$ floyd run --env keras:py2 --data wYnoL4qQv8Z7KiGJpDq8wY "python evaluate.py --allow-different-dimensions  --checkpoint /input/fns.ckpt --in-path ./images/ --out-path /output/"

Syncing code ...
RUN ID                  NAME                                 VERSION
----------------------  ---------------------------------  ---------
YJYN67ZyKsa2dppa92eaEF  y12floydhub/fast-style-transfer:2          2

To view logs enter:
    floyd logs YJYN67ZyKsa2dppa92eaEF

$ floyd info YJYN67ZyKsa2dppa92eaEF
-----------  ---------------------------------
Run ID       YJYN67ZyKsa2dppa92eaEF
Name         y12floydhub/fast-style-transfer:2
Created      12 minutes ago
Status       queued
Duration(s)  0
Output ID
Instance     cpu
Version      2

// queued ?

$ floyd run --gpu --env keras:py2 --data Js534T344XYBPMvWqhxJNj "python evaluate.py --allow-different-dimensions --checkpoint /input/rain_princess.ckpt --in-path ./images/ --out-path /output/"

// After 4 hours ....
$ floyd info LW79dH4BjucodwSUKLjTi5
-----------  ---------------------------------
Run ID       LW79dH4BjucodwSUKLjTi5
Name         y12floydhub/fast-style-transfer:3
Created      4 hours ago
Status       running
Duration(s)  0
Output ID    DcjKXUaGDEHsESXEKj6SbS
Instance     gpu
Version      3
-----------  ---------------------------------
```

### References
* Style Transfer - FloydHub  http://docs.floydhub.com/guides/style_transfer/
* Floyd Zero Setup Deep Learning https://www.floydhub.com/
* floydhub/fast-style-transfer: Fast Style Transfer in TensorFlow! ⚡🖥🎨🖼  https://github.com/floydhub/fast-style-transfer
* floydhub/dl-setup: Instructions for setting up the software on your deep learning machine  https://github.com/floydhub/dl-setup
* 被稱為心理治療效用的藝術，Leonid Afremov撼動人心的油畫世界！ | 時尚華爾滋  http://www.fashionwaltz.com/?p=3693
