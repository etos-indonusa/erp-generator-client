import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MpcJoShareWidgetComponent } from './mpc-jo-share-widget.component';

describe('MpcJoShareWidgetComponent', () => {
  let component: MpcJoShareWidgetComponent;
  let fixture: ComponentFixture<MpcJoShareWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MpcJoShareWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MpcJoShareWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
