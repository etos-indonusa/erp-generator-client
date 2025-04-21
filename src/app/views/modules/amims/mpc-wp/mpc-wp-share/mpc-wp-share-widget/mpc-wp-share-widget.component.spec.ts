import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MpcWpShareWidgetComponent } from './mpc-wp-share-widget.component';

describe('MpcWpShareWidgetComponent', () => {
  let component: MpcWpShareWidgetComponent;
  let fixture: ComponentFixture<MpcWpShareWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MpcWpShareWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MpcWpShareWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
