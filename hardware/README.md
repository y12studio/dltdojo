### Hardware Random Number Generator

Raspberry Pi Bitcoin Wallet Generator https://github.com/vesteraas/RaspberryPiBitcoinWalletGenerator

 Raspberry Pi/Quick Install Guide - Gentoo Wiki  https://wiki.gentoo.org/wiki/Raspberry_Pi/Quick_Install_Guide#Hardware_Random_Number_Generator

 Hardware RNG on Raspberry Pi – Fios Air Thuaiream http://fios.sector16.net/hardware-rng-on-raspberry-pi/
```
$ sudo apt-get update
$ sudo apt-get -y dist-upgrade
$ sudo rpi-update
$ sudo reboot
$ sudo modprobe bcm2708-rng
$ sudo nano /etc/modules
bcm2708-rng
$ sudo apt-get install rng-tools
$ sudo nano /ext/default/rng-tools
HRNGDEVICE=/dev/hwrng
$ sudo service rng-tools restart
```
