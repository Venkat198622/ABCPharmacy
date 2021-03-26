import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SalePostService } from '../services/sale-post.service';
import {   SaleModel } from '../models/salemodel';

@Component({
  selector: 'app-sale-posts',
  templateUrl: './sale-posts.component.html',
  styleUrls: ['./sale-posts.component.scss']
})
export class SalePostsComponent implements OnInit {
  salePosts$: Observable<SaleModel[]>;

  constructor(private salePostService: SalePostService) {
  }

  ngOnInit() {
    this.loadSales();
  }

  loadSales() {
    this.salePosts$ = this.salePostService.getSales();
  }

  delete(id) {
    const ans = confirm('Do you want to delete sale post with id: ' + id);
    if (ans) {
      this.salePostService.deleteSales(id).subscribe((data) => {
        this.loadSales();
      });
    }
  }
}
