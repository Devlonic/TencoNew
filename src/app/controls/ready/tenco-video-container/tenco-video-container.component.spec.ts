import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TencoVideoContainerComponent } from './tenco-video-container.component';

describe('TencoVideoContainerComponent', () => {
  let component: TencoVideoContainerComponent;
  let fixture: ComponentFixture<TencoVideoContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TencoVideoContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TencoVideoContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
