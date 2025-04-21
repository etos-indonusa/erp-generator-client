import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartAlternativeShareWidgetComponent } from './part-alternative-share-widget.component';

describe('PartAlternativeShareWidgetComponent', () => {
  let component: PartAlternativeShareWidgetComponent;
  let fixture: ComponentFixture<PartAlternativeShareWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartAlternativeShareWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartAlternativeShareWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
