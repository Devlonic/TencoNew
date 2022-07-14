import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TencoFullwidthscreenSectionComponent } from './tenco-fullwidthscreen-section.component';

describe('TencoFullwidthscreenSectionComponent', () => {
  let component: TencoFullwidthscreenSectionComponent;
  let fixture: ComponentFixture<TencoFullwidthscreenSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TencoFullwidthscreenSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TencoFullwidthscreenSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
