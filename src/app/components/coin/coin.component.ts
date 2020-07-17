import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-coin',
  templateUrl: './coin.component.html',
  styleUrls: ['./coin.component.css']
})
export class CoinComponent implements OnInit {
  @Input() coin: any;
  previousPrice: any;
  constructor() { }

  ngOnInit(): void {
    this.previousPrice = this.coin.market_data.current_price;
  }

  isNegative() {
    return (this.coin && this.coin.change < 0);
  }

  isPositive() {
    return (this.coin && this.coin.change > 0);
  }


}
