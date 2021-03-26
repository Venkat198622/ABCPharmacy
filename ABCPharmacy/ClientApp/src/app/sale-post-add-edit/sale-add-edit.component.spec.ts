import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalePostAddEditComponent } from './sale-add-edit.component';

describe('SalePostAddEditComponent', () => {
  let component: SalePostAddEditComponent;
  let fixture: ComponentFixture<SalePostAddEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalePostAddEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalePostAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
