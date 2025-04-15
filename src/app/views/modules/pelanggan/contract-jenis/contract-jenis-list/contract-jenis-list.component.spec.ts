import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractJenisListComponent } from './contract-jenis-list.component';

describe('ContractJenisListComponent', () => {
  let component: ContractJenisListComponent;
  let fixture: ComponentFixture<ContractJenisListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContractJenisListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContractJenisListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
