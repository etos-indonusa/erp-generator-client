import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtaShareDetailComponent } from './ata-share-detail.component';

describe('AtaShareDetailComponent', () => {
  let component: AtaShareDetailComponent;
  let fixture: ComponentFixture<AtaShareDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AtaShareDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtaShareDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
