import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MpcPiroShareWidgetComponent } from './mpc-piro-share-widget.component';

describe('MpcPiroShareWidgetComponent', () => {
  let component: MpcPiroShareWidgetComponent;
  let fixture: ComponentFixture<MpcPiroShareWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MpcPiroShareWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MpcPiroShareWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
