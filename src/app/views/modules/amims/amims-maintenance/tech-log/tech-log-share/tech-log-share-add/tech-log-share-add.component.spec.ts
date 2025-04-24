import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechLogShareAddComponent } from './tech-log-share-add.component';

describe('TechLogShareAddComponent', () => {
  let component: TechLogShareAddComponent;
  let fixture: ComponentFixture<TechLogShareAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TechLogShareAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechLogShareAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
