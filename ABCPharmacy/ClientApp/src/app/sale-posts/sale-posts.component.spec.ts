import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalePostsComponent } from './sale-posts.component';

describe('SalePostsComponent', () => {
  let component: SalePostsComponent;
  let fixture: ComponentFixture<SalePostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalePostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalePostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
