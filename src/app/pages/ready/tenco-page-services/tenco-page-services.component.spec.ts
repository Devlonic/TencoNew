import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TencoPageServicesComponent } from './tenco-page-services.component';

describe('TencoPageServicesComponent', () => {
  let component: TencoPageServicesComponent;
  let fixture: ComponentFixture<TencoPageServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TencoPageServicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TencoPageServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
