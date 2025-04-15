import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractSiteListComponent } from './contract-site-list.component';

describe('ContractSiteListComponent', () => {
  let component: ContractSiteListComponent;
  let fixture: ComponentFixture<ContractSiteListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContractSiteListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContractSiteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
