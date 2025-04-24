import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarrantyShareDetailComponent } from './warranty-share-detail.component';

describe('WarrantyShareDetailComponent', () => {
  let component: WarrantyShareDetailComponent;
  let fixture: ComponentFixture<WarrantyShareDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WarrantyShareDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WarrantyShareDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
