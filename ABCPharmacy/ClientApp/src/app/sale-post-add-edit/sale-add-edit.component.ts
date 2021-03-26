import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { SalePostService } from '../services/sale-post.service';
import { SaleModel } from '../models/salemodel';

@Component({
  selector: 'app-sale-add-edit',
  templateUrl: './sale-add-edit.component.html',
  styleUrls: ['./sale-add-edit.component.scss']
})
export class SalePostAddEditComponent implements OnInit {
  form: FormGroup;
  actionType: string;
  formMedicineName: string;
  formBrand: string;
  id: number;
  formPrice: string;
  formQuantity: string;
  formExpiryDate: string;
  formNotes: string;
  errorMessage: any;
  existingSalePost: SaleModel;

  constructor(private salePostService: SalePostService, private formBuilder: FormBuilder, private avRoute: ActivatedRoute, private router: Router) {
    const idParam = 'id';
    this.actionType = 'Add';
    this.formMedicineName = 'medicineName';
    this.formBrand = 'brand';
    this.formPrice = 'price';
    this.formQuantity = 'quantity';
    this.formExpiryDate = 'expiryDate';
    this.formNotes = 'notes';
   
    
    if (this.avRoute.snapshot.params[idParam]) {
      this.id = this.avRoute.snapshot.params[idParam];
    }

    // this.form = this.formBuilder.group(
    //   {
    //     id: 0,
    //     medicineName: ['', [Validators.required]],
    //     brand: ['', [Validators.required]],
    //   }
    // )
  }

  ngOnInit() {

    if (this.id > 0) {
      this.actionType = 'Edit';
      this.salePostService.getSale(this.id)
        .subscribe(data => (
          this.existingSalePost = data,
          this.form.controls[this.formMedicineName].setValue(data.medicineName),
          this.form.controls[this.formBrand].setValue(data.brand)
        ));
    }
  }

  save() {
    if (!this.form.valid) {
      return;
    }

    if (this.actionType === 'Add') {
      let sale: SaleModel = {
        medicineName: this.form.get(this.formMedicineName).value,
        brand: this.form.get(this.formBrand).value,
        price:  this.form.get(this.formPrice).value,
        quantity:  this.form.get(this.formQuantity).value,
        notes:  this.form.get(this.formNotes).value,
        expiryDate: this.form.get(this.formMedicineName).value,
        
      };

      this.salePostService.saveSales(sale)
        .subscribe((data) => {
          this.router.navigate(['/salepost', data.id]);
        });
    }

    if (this.actionType === 'Edit') {
      let sale: SaleModel = {
        id: this.existingSalePost.id,
        medicineName: this.form.get(this.formMedicineName).value,
        brand: this.form.get(this.formBrand).value,
        price:  this.form.get(this.formPrice).value,
        quantity:  this.form.get(this.formQuantity).value,
        notes:  this.form.get(this.formNotes).value,
        expiryDate: this.form.get(this.formMedicineName).value,
    
      };
      this.salePostService.updateSales(sale.id, sale)
        .subscribe((data) => {
          this.router.navigate([this.router.url]);
        });
    }
  }

  cancel() {
    this.router.navigate(['/']);
  }

 
}
