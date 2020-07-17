import { Component, Renderer2, OnInit, OnDestroy } from '@angular/core';
import { StockInterface, StocksService } from './services/stocks.service';
import { CoinService } from './services/coin.service';
import { Subscription, timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'first-app';
  stocks : Array<StockInterface>;
  symbols: Array<string>;
  //coin
  // chainlink: any;
  // cardano: any;
  // btcv: any;
  // btc: any;

  // subscriptionLink: Subscription;
  // subscriptionCardano: Subscription;
  // subscriptionBtcv: Subscription;
  // subscriptionBtc: Subscription;

  // previousPrice: any;
  constructor(private service: StocksService, private coin: CoinService) {
    this.symbols = service.get();
  }
  ngOnInit() {
    this.service.load(this.symbols).subscribe(stocks => this.stocks = stocks);
  }
  // ngOnInit(): void {
    // this.subscriptionLink = timer(0, 20000).pipe(
    //   switchMap(() => this.coin.load(['chainlink']))
    // ).subscribe(result => {
    //   this.chainlink = result;
    // });

    // this.subscriptionCardano = timer(0, 20000).pipe(
    //   switchMap(() => this.coin.load(['cardano']))
    // ).subscribe(result => {
    //   this.cardano = result;
    // });

    // this.subscriptionBtcv = timer(0, 20000).pipe(
    //   switchMap(() => this.coin.load(['bitcoin-vault']))
    // ).subscribe(result => {
    //   this.btcv = result;
    // });

    // this.subscriptionBtc = timer(0, 20000).pipe(
    //   switchMap(() => this.coin.load(['bitcoin']))
    // ).subscribe(result => {
    //   this.btc = result;
    // });
  // }

  ngOnDestroy(): void {
    // this.subscriptionLink.unsubscribe();
    // this.subscriptionCardano.unsubscribe();
    // this.subscriptionBtcv.unsubscribe();
    // this.subscriptionBtc.unsubscribe();
  }
}
