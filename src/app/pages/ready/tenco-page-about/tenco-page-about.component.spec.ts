import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TencoPageAboutComponent } from './tenco-page-about.component';

describe('TencoPageAboutComponent', () => {
  let component: TencoPageAboutComponent;
  let fixture: ComponentFixture<TencoPageAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TencoPageAboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TencoPageAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
