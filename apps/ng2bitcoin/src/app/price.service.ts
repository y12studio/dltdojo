import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import { Observable } from 'rxjs/Rx'
import 'rxjs/add/operator/map'

@Injectable()
export class PriceService {

  constructor(private http: Http) { }

  getBitcoinPrice(): Observable<any> {
    return this.http
      .get('https://blockchain.info/ticker?cors=true')
      .map((res: any) => res.json())
  }

}
