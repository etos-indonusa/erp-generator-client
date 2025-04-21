import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DueListShareWidgetComponent } from './due-list-share-widget.component';

describe('DueListShareWidgetComponent', () => {
  let component: DueListShareWidgetComponent;
  let fixture: ComponentFixture<DueListShareWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DueListShareWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DueListShareWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
