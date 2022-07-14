import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TencoHoverAnimatedTileComponent } from './tenco-hover-animated-tile.component';

describe('TencoHoverAnimatedTileComponent', () => {
  let component: TencoHoverAnimatedTileComponent;
  let fixture: ComponentFixture<TencoHoverAnimatedTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TencoHoverAnimatedTileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TencoHoverAnimatedTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
