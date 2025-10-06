import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WpShareHeaderComponent } from './wp-share-header.component';

describe('WpShareHeaderComponent', () => {
  let component: WpShareHeaderComponent;
  let fixture: ComponentFixture<WpShareHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WpShareHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WpShareHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
