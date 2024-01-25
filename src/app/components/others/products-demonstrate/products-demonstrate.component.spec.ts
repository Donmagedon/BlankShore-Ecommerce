import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsDemonstrateComponent } from './products-demonstrate.component';

describe('ProductsDemonstrateComponent', () => {
  let component: ProductsDemonstrateComponent;
  let fixture: ComponentFixture<ProductsDemonstrateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsDemonstrateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsDemonstrateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
