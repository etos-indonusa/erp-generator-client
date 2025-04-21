import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurGrnShareWidgetComponent } from './pur-grn-share-widget.component';

describe('PurGrnShareWidgetComponent', () => {
  let component: PurGrnShareWidgetComponent;
  let fixture: ComponentFixture<PurGrnShareWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PurGrnShareWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurGrnShareWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
