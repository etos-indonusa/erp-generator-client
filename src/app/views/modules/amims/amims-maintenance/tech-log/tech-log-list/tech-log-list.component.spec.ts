import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechLogListComponent } from './tech-log-list.component';

describe('TechLogListComponent', () => {
  let component: TechLogListComponent;
  let fixture: ComponentFixture<TechLogListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TechLogListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechLogListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
