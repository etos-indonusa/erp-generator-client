import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartShareWidgetComponent } from './part-share-widget.component';

describe('PartShareWidgetComponent', () => {
  let component: PartShareWidgetComponent;
  let fixture: ComponentFixture<PartShareWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartShareWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartShareWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
