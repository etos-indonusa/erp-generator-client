import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartAtaShareWidgetComponent } from './part-ata-share-widget.component';

describe('PartAtaShareWidgetComponent', () => {
  let component: PartAtaShareWidgetComponent;
  let fixture: ComponentFixture<PartAtaShareWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartAtaShareWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartAtaShareWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
