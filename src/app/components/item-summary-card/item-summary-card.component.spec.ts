import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemSummaryCardComponent } from './item-summary-card.component';

describe('ItemSummaryCardComponent', () => {
  let component: ItemSummaryCardComponent;
  let fixture: ComponentFixture<ItemSummaryCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemSummaryCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemSummaryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
