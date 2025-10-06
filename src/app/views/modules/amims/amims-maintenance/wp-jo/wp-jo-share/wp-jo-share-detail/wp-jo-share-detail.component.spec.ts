import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WpJoShareDetailComponent } from './wp-jo-share-detail.component';

describe('WpJoShareDetailComponent', () => {
  let component: WpJoShareDetailComponent;
  let fixture: ComponentFixture<WpJoShareDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WpJoShareDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WpJoShareDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
