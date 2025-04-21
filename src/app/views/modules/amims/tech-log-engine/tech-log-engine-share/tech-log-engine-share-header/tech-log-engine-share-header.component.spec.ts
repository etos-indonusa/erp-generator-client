import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechLogEngineShareHeaderComponent } from './tech-log-engine-share-header.component';

describe('TechLogEngineShareHeaderComponent', () => {
  let component: TechLogEngineShareHeaderComponent;
  let fixture: ComponentFixture<TechLogEngineShareHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TechLogEngineShareHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechLogEngineShareHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
