import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TdTypeShareWidgetComponent } from './td-type-share-widget.component';

describe('TdTypeShareWidgetComponent', () => {
  let component: TdTypeShareWidgetComponent;
  let fixture: ComponentFixture<TdTypeShareWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TdTypeShareWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TdTypeShareWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
