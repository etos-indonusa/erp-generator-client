import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechLogShareListComponent } from './tech-log-share-list.component';

describe('TechLogShareListComponent', () => {
  let component: TechLogShareListComponent;
  let fixture: ComponentFixture<TechLogShareListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TechLogShareListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechLogShareListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
