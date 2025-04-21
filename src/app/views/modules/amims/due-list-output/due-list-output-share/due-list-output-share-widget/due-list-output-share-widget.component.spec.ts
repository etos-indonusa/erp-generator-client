import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DueListOutputShareWidgetComponent } from './due-list-output-share-widget.component';

describe('DueListOutputShareWidgetComponent', () => {
  let component: DueListOutputShareWidgetComponent;
  let fixture: ComponentFixture<DueListOutputShareWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DueListOutputShareWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DueListOutputShareWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
