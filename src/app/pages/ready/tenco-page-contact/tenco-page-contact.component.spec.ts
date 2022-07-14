import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TencoPageContactComponent } from './tenco-page-contact.component';

describe('TencoPageContactComponent', () => {
  let component: TencoPageContactComponent;
  let fixture: ComponentFixture<TencoPageContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TencoPageContactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TencoPageContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
