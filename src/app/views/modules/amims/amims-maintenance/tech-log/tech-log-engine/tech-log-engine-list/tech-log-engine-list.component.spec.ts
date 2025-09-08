import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechLogEngineListComponent } from './tech-log-engine-list.component';

describe('TechLogEngineListComponent', () => {
  let component: TechLogEngineListComponent;
  let fixture: ComponentFixture<TechLogEngineListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TechLogEngineListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechLogEngineListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
