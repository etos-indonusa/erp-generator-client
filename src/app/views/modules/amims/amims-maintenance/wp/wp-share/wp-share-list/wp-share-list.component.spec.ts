import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WpShareListComponent } from './wp-share-list.component';

describe('WpShareListComponent', () => {
  let component: WpShareListComponent;
  let fixture: ComponentFixture<WpShareListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WpShareListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WpShareListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
