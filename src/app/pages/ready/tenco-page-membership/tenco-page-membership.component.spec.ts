import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TencoPageMembershipComponent } from './tenco-page-membership.component';

describe('TencoPageMembershipComponent', () => {
  let component: TencoPageMembershipComponent;
  let fixture: ComponentFixture<TencoPageMembershipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TencoPageMembershipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TencoPageMembershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
