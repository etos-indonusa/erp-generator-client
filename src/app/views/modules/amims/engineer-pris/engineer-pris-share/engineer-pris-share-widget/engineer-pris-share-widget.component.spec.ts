import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineerPrisShareWidgetComponent } from './engineer-pris-share-widget.component';

describe('EngineerPrisShareWidgetComponent', () => {
  let component: EngineerPrisShareWidgetComponent;
  let fixture: ComponentFixture<EngineerPrisShareWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EngineerPrisShareWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EngineerPrisShareWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
