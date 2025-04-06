import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KantorShareDetailComponent } from './kantor-share-detail.component';

describe('KantorShareDetailComponent', () => {
  let component: KantorShareDetailComponent;
  let fixture: ComponentFixture<KantorShareDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KantorShareDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KantorShareDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
