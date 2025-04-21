import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MelShareDetailComponent } from './mel-share-detail.component';

describe('MelShareDetailComponent', () => {
  let component: MelShareDetailComponent;
  let fixture: ComponentFixture<MelShareDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MelShareDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MelShareDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
