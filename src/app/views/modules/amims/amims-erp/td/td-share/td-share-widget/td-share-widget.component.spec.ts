import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TdShareWidgetComponent } from './td-share-widget.component';

describe('TdShareWidgetComponent', () => {
  let component: TdShareWidgetComponent;
  let fixture: ComponentFixture<TdShareWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TdShareWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TdShareWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
