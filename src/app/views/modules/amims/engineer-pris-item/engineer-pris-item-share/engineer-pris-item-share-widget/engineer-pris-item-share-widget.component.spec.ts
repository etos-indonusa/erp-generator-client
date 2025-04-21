import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineerPrisItemShareWidgetComponent } from './engineer-pris-item-share-widget.component';

describe('EngineerPrisItemShareWidgetComponent', () => {
  let component: EngineerPrisItemShareWidgetComponent;
  let fixture: ComponentFixture<EngineerPrisItemShareWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EngineerPrisItemShareWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EngineerPrisItemShareWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
