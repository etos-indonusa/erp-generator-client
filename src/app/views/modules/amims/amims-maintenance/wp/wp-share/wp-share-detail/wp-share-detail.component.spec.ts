import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WpShareDetailComponent } from './wp-share-detail.component';

describe('WpShareDetailComponent', () => {
  let component: WpShareDetailComponent;
  let fixture: ComponentFixture<WpShareDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WpShareDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WpShareDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
