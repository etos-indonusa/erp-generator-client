import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineerPrisReturnItemShareWidgetComponent } from './engineer-pris-return-item-share-widget.component';

describe('EngineerPrisReturnItemShareWidgetComponent', () => {
  let component: EngineerPrisReturnItemShareWidgetComponent;
  let fixture: ComponentFixture<EngineerPrisReturnItemShareWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EngineerPrisReturnItemShareWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EngineerPrisReturnItemShareWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
