import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechLogJoListComponent } from './tech-log-jo-list.component';

describe('TechLogJoListComponent', () => {
  let component: TechLogJoListComponent;
  let fixture: ComponentFixture<TechLogJoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TechLogJoListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechLogJoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
