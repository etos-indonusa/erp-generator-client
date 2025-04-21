import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MpcJoOperatorShareWidgetComponent } from './mpc-jo-operator-share-widget.component';

describe('MpcJoOperatorShareWidgetComponent', () => {
  let component: MpcJoOperatorShareWidgetComponent;
  let fixture: ComponentFixture<MpcJoOperatorShareWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MpcJoOperatorShareWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MpcJoOperatorShareWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
