import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WpShareAddComponent } from './wp-share-add.component';

describe('WpShareAddComponent', () => {
  let component: WpShareAddComponent;
  let fixture: ComponentFixture<WpShareAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WpShareAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WpShareAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
