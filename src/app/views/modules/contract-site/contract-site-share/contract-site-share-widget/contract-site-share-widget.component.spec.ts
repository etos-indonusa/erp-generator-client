import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractSiteShareWidgetComponent } from './contract-site-share-widget.component.ts.ejs';

describe('ContractSiteShareWidgetComponent', () => {
  let component: ContractSiteShareWidgetComponent;
  let fixture: ComponentFixture<ContractSiteShareWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContractSiteShareWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContractSiteShareWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
