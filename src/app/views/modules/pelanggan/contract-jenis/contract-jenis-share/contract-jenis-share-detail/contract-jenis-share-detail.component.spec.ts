import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractJenisShareDetailComponent } from './contract-jenis-share-detail.component';

describe('ContractJenisShareDetailComponent', () => {
  let component: ContractJenisShareDetailComponent;
  let fixture: ComponentFixture<ContractJenisShareDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContractJenisShareDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContractJenisShareDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
