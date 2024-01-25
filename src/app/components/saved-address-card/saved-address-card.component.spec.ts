import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedAddressCardComponent } from './saved-address-card.component';

describe('SavedAddressCardComponent', () => {
  let component: SavedAddressCardComponent;
  let fixture: ComponentFixture<SavedAddressCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavedAddressCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SavedAddressCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
