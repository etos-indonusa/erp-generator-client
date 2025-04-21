import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartidShareWidgetComponent } from './partid-share-widget.component';

describe('PartidShareWidgetComponent', () => {
  let component: PartidShareWidgetComponent;
  let fixture: ComponentFixture<PartidShareWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartidShareWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartidShareWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
