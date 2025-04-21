import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MpcGseShareWidgetComponent } from './mpc-gse-share-widget.component';

describe('MpcGseShareWidgetComponent', () => {
  let component: MpcGseShareWidgetComponent;
  let fixture: ComponentFixture<MpcGseShareWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MpcGseShareWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MpcGseShareWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
