import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TencoNavbarComponent } from './tenco-navbar.component';

describe('TencoNavbarComponent', () => {
  let component: TencoNavbarComponent;
  let fixture: ComponentFixture<TencoNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TencoNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TencoNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
