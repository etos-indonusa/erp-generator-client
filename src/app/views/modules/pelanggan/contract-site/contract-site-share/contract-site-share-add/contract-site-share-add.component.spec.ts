import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractSiteShareAddComponent } from './contract-site-share-add.component';

describe('ContractSiteShareAddComponent', () => {
  let component: ContractSiteShareAddComponent;
  let fixture: ComponentFixture<ContractSiteShareAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContractSiteShareAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContractSiteShareAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
