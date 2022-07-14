import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TencoPageErrorComponent } from './tenco-page-error.component';

describe('TencoPageErrorComponent', () => {
  let component: TencoPageErrorComponent;
  let fixture: ComponentFixture<TencoPageErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TencoPageErrorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TencoPageErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
