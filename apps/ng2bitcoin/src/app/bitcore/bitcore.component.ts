import { Component, OnInit } from '@angular/core';
import {PriceService} from '../price.service';
import {Foo} from '../foo';
import * as _ from 'lodash';
import { Observable } from 'rxjs/Rx';
declare var DltdojoBundle: any;
const bitcorelib = DltdojoBundle.bitcorelib;
const PrivateKey = bitcorelib.PrivateKey;

@Component({
  selector: 'app-bitcore',
  templateUrl: './bitcore.component.html',
  styleUrls: ['./bitcore.component.css'],
  providers: [PriceService]
})

export class BitcoreComponent implements OnInit {

  address = '0x0006';
  key = '0x0002';
  ran = 10;
  rawprice: {};
  twdprice:0;
  foo:Foo = new Foo();

  constructor(private priceService: PriceService) { }

  ngOnInit() {
    var pkey = new PrivateKey();
    this.address = pkey.toAddress().toString();
    this.key = pkey.toString();
    this.ran = _.random(12, 86);
    this.priceService.getBitcoinPrice().subscribe(v => {
      this.rawprice = v;
      this.twdprice = v.TWD.last;
    }, err => console.log(err))
  }

}
