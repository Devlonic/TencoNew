import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TencoHeaderComponent } from './tenco-header.component';

describe('TencoHeaderComponent', () => {
  let component: TencoHeaderComponent;
  let fixture: ComponentFixture<TencoHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TencoHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TencoHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
