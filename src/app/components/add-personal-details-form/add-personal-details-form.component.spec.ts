import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPersonalDetailsFormComponent } from './add-personal-details-form.component';

describe('AddPersonalDetailsFormComponent', () => {
  let component: AddPersonalDetailsFormComponent;
  let fixture: ComponentFixture<AddPersonalDetailsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPersonalDetailsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPersonalDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
