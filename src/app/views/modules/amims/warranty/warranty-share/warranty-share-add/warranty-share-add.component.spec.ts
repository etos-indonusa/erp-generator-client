import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarrantyShareAddComponent } from './warranty-share-add.component';

describe('WarrantyShareAddComponent', () => {
  let component: WarrantyShareAddComponent;
  let fixture: ComponentFixture<WarrantyShareAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WarrantyShareAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WarrantyShareAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
