import { Component, Renderer2, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { StockInterface, StocksService } from './services/stocks.service';
import { CoinService } from './services/coin.service';
import { Subscription, timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'first-app';
  stocks : Array<StockInterface>;
  symbols: Array<string>;
  @ViewChild(DashboardComponent) dashboard: DashboardComponent;

  constructor(private service: StocksService, private coin: CoinService) {
    this.symbols = service.get();
  }
  ngOnInit() {
    this.service.load(this.symbols).subscribe(stocks => this.stocks = stocks);
  }

  ngOnDestroy(): void {

  }

  refresh() {
    this.dashboard.generateData();
  }
}
