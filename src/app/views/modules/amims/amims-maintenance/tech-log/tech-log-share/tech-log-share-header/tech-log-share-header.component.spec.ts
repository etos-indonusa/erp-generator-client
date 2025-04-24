import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechLogShareHeaderComponent } from './tech-log-share-header.component';

describe('TechLogShareHeaderComponent', () => {
  let component: TechLogShareHeaderComponent;
  let fixture: ComponentFixture<TechLogShareHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TechLogShareHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechLogShareHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
