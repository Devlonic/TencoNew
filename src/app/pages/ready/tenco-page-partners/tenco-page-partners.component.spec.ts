import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TencoPagePartnersComponent } from './tenco-page-partners.component';

describe('TencoPagePartnersComponent', () => {
  let component: TencoPagePartnersComponent;
  let fixture: ComponentFixture<TencoPagePartnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TencoPagePartnersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TencoPagePartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
