import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractShareWidgetComponent } from './contract-share-widget.component.ts.ejs';

describe('ContractShareWidgetComponent', () => {
  let component: ContractShareWidgetComponent;
  let fixture: ComponentFixture<ContractShareWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContractShareWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContractShareWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
