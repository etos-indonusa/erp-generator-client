import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientShareDetailComponent } from './client-share-detail.component.ts.ejs';

describe('ClientShareDetailComponent', () => {
  let component: ClientShareDetailComponent;
  let fixture: ComponentFixture<ClientShareDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClientShareDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientShareDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
