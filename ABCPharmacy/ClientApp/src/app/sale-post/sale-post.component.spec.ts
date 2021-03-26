import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalePostComponent } from './sale-post.component';

describe('SalePostComponent', () => {
  let component: SalePostComponent;
  let fixture: ComponentFixture<SalePostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalePostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
