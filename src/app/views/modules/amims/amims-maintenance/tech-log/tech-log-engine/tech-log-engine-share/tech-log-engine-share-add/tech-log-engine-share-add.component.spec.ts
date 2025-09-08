import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechLogEngineShareAddComponent } from './tech-log-engine-share-add.component';

describe('TechLogEngineShareAddComponent', () => {
  let component: TechLogEngineShareAddComponent;
  let fixture: ComponentFixture<TechLogEngineShareAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TechLogEngineShareAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechLogEngineShareAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
