import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractJenisShareAddComponent } from './contract-jenis-share-add.component';

describe('ContractJenisShareAddComponent', () => {
  let component: ContractJenisShareAddComponent;
  let fixture: ComponentFixture<ContractJenisShareAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContractJenisShareAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContractJenisShareAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
