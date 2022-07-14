import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TencoPageHomeComponent } from './tenco-page-home.component';

describe('TencoPageHomeComponent', () => {
  let component: TencoPageHomeComponent;
  let fixture: ComponentFixture<TencoPageHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TencoPageHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TencoPageHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
