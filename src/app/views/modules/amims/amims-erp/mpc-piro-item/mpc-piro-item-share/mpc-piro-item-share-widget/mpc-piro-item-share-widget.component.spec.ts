import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MpcPiroItemShareWidgetComponent } from './mpc-piro-item-share-widget.component';

describe('MpcPiroItemShareWidgetComponent', () => {
  let component: MpcPiroItemShareWidgetComponent;
  let fixture: ComponentFixture<MpcPiroItemShareWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MpcPiroItemShareWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MpcPiroItemShareWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
