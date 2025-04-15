import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractSiteShareDetailComponent } from './contract-site-share-detail.component';

describe('ContractSiteShareDetailComponent', () => {
  let component: ContractSiteShareDetailComponent;
  let fixture: ComponentFixture<ContractSiteShareDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContractSiteShareDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContractSiteShareDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
