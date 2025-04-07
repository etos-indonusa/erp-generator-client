import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractShareAddComponent } from './contract-share-add.component';

describe('ContractShareAddComponent', () => {
  let component: ContractShareAddComponent;
  let fixture: ComponentFixture<ContractShareAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContractShareAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContractShareAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
