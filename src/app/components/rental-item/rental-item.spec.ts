import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalItem } from './rental-item';

describe('RentalItem', () => {
  let component: RentalItem;
  let fixture: ComponentFixture<RentalItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RentalItem],
    }).compileComponents();

    fixture = TestBed.createComponent(RentalItem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
