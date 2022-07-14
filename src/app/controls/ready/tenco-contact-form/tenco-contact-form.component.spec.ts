import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TencoContactFormComponent } from './tenco-contact-form.component';

describe('TencoContactFormComponent', () => {
  let component: TencoContactFormComponent;
  let fixture: ComponentFixture<TencoContactFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TencoContactFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TencoContactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
