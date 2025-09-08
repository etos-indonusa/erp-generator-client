import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechLogEngineCheckShareListComponent } from './tech-log-engine-check-share-list.component';

describe('TechLogEngineCheckShareListComponent', () => {
  let component: TechLogEngineCheckShareListComponent;
  let fixture: ComponentFixture<TechLogEngineCheckShareListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TechLogEngineCheckShareListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechLogEngineCheckShareListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
