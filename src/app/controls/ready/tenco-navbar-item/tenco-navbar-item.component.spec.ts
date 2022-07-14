import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TencoNavbarItemComponent } from './tenco-navbar-item.component';

describe('TencoNavbarItemComponent', () => {
  let component: TencoNavbarItemComponent;
  let fixture: ComponentFixture<TencoNavbarItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TencoNavbarItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TencoNavbarItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
