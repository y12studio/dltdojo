import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
declare var DltdojoBundle: any;
const bitcorelib = DltdojoBundle.bitcorelib;
const PrivateKey = bitcorelib.PrivateKey;

@Component({
  selector: 'app-bitcore',
  templateUrl: './bitcore.component.html',
  styleUrls: ['./bitcore.component.css']
})
export class BitcoreComponent implements OnInit {

  address = '0x0006';
  key = '0x00';
  foo = 10;

  constructor() { }

  ngOnInit() {
    var pkey = new PrivateKey();
    this.address = pkey.toAddress().toString();
    this.key = pkey.toString();
    this.foo = _.random(5, 86);
  }

}
