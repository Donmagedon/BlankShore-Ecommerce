import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedDetailsCardComponent } from './saved-details-card.component';

describe('SavedDetailsCardComponent', () => {
  let component: SavedDetailsCardComponent;
  let fixture: ComponentFixture<SavedDetailsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavedDetailsCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SavedDetailsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
