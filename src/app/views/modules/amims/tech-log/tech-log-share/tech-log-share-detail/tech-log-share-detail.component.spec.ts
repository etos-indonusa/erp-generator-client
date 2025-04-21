import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechLogShareDetailComponent } from './tech-log-share-detail.component';

describe('TechLogShareDetailComponent', () => {
  let component: TechLogShareDetailComponent;
  let fixture: ComponentFixture<TechLogShareDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TechLogShareDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechLogShareDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
