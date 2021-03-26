import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { SalePostService } from '../services/sale-post.service';
import { SaleModel } from '../models/salemodel';

@Component({
  selector: 'sale-post',
  templateUrl: './sale-post.component.html',
  styleUrls: ['./sale-post.component.scss']
})
export class SalePostComponent implements OnInit {
  salePost$: Observable<SaleModel>;
  id: number;

  constructor(private salePostService: SalePostService, private avRoute: ActivatedRoute) {
    const idParam = 'id';
    if (this.avRoute.snapshot.params[idParam]) {
      this.id = this.avRoute.snapshot.params[idParam];
    }
  }

  ngOnInit() {
    this.loadSales();
  }

  loadSales() {
    this.salePost$ = this.salePostService.getSale(this.id);
  }
}
