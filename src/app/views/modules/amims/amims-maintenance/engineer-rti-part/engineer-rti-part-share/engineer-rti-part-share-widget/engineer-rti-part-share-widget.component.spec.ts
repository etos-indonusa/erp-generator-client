import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineerRtiPartShareWidgetComponent } from './engineer-rti-part-share-widget.component';

describe('EngineerRtiPartShareWidgetComponent', () => {
  let component: EngineerRtiPartShareWidgetComponent;
  let fixture: ComponentFixture<EngineerRtiPartShareWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EngineerRtiPartShareWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EngineerRtiPartShareWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
