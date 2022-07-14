import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TencoLogoComponent } from './tenco-logo.component';

describe('TencoLogoComponent', () => {
  let component: TencoLogoComponent;
  let fixture: ComponentFixture<TencoLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TencoLogoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TencoLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
