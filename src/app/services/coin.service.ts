import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


let stocks: Array<string> = ['AAPL', 'GOOG', 'FB', 'AMZN', 'TWTR'];
let service: string = 'https://api.coingecko.com/api/v3/coins/';

export interface StockInterface {
  symbol: string;
  lastTradePriceOnly: number;
  change: number;
  changeInPercent: number;
}
@Injectable({
  providedIn: 'root'
})
export class CoinService {

  constructor(private http: HttpClient) { }

  get() {
    return stocks.slice();
  }

  add(stock: any) {
    stocks.push(stock);
    return this.get();
  }

  remove(stock: any) {
    stocks.splice(stocks.indexOf(stock), 1);
    return this.get();
  }

  // load(coinname: any) {
  //   // console.log(coinname);
  //   if(coinname) {
  //     // console.log(service + coinname.join());
  //     return this.http.get<Array<any>>(service + coinname.join());
  //   }
  // }

  load(symbols) {
    if (symbols) {
      return this.http.get<Array<StockInterface>>(service + '/stocks/ snapshot?symbols=' + symbols.join());
    }                                                                  }
}
