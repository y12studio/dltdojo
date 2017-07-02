## 如何匯入虛擬裝置(ova檔案)

* 下載下面DLTDOJO ova檔案
* 開啟VirtualBox - 檔案 - 匯入應用裝置
* 選擇下載ova檔案
* 修改名稱
* 修改虛擬磁碟映像為實際本機有效位置
* 勾選初始化網卡MAC位址
* 匯入
* 如有共用資料夾路徑到設定修改本機實際路徑，注意資料夾名稱必須是w1share綁定不要更改。

## DLTDOJO W1 Virtual Device

Windows Host with Guest Additions

* Name: DLTDOJO-W1
* Base: DLTDOJO-B2
* OVA size: 1.1 GiB
* OVA link: http://dltdojo.org/vbvm/dltdojo-w1.ova
* OS: Ubuntu 16.04 Server
* RAM: 4 GiB
* HD: 50 GiB
* Network: 橋接介面卡
* Username: dltdojo
* Password: dltdojo
* IP address: login, ifconfig
* 共用資料夾名稱(綁定掛載不能更改): w1share

#### Install Guest Additions

裝置 >  插入 Guest Additions CD 映像...

```
$ sudo mount /dev/cdrom /media/cdrom
mount: /dev/sr0 is write-protected, mounting read-only
$ sudo apt-get install make gcc linux-headers-$(uname -r)
$ sudo /media/cdrom/VBoxLinuxAdditions.run
$ sudo nano /etc/fstab

w1share /home/dltdojo/w1share vboxsf defaults,_netdev 0 0
$ sudo reboot
$ ls -al ~/w1share
```

## DLTDOJO B2 Virtual Device

* Name: DLTDOJO-B2
* OVA size: 1 GiB
* OVA link: http://dltdojo.org/vbvm/dltdojo-b2.ova
* OS: Ubuntu 16.04 Server
* RAM: 4 GiB
* HD: 50 GiB
* Network: 橋接介面卡
* Username: dltdojo
* Password: dltdojo
* IP address: login, ifconfig

#### Install Docker and Nodejs

```
$ sudo apt-get update
$ sudo apt-get install -y apt-transport-https ca-certificates curl git jq software-properties-common
$ curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
$ sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
$ sudo apt-get update && sudo apt-get install -y docker-ce docker-compose
$ sudo usermod -aG docker $USER
$ curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
$ sudo apt-get install -y nodejs
dltdojo@dltdojo:~$ docker version
Client:
 Version:      17.06.0-ce
 API version:  1.30
 Go version:   go1.8.3
 Git commit:   02c1d87
 Built:        Fri Jun 23 21:23:31 2017
 OS/Arch:      linux/amd64
Got permission denied while trying to connect to the Docker daemon socket at unix:///var/run/docker.sock: Get http://%2Fvar%2Frun%2Fdocker.sock/v1.30/version: dial unix /var/run/docker.sock: connect: permission denied
dltdojo@dltdojo:~$ docker-compose version
docker-compose version 1.8.0, build unknown
docker-py version: 1.9.0
CPython version: 2.7.12
OpenSSL version: OpenSSL 1.0.2g  1 Mar 2016
dltdojo@dltdojo:~$ node -v
v8.1.3
dltdojo@dltdojo:~$ npm -v
5.0.3
```