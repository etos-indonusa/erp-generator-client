import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractShareHeaderComponent } from './contract-share-header.component';

describe('ContractShareHeaderComponent', () => {
  let component: ContractShareHeaderComponent;
  let fixture: ComponentFixture<ContractShareHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContractShareHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContractShareHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
