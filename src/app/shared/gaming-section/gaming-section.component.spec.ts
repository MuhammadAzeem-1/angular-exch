import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamingSectionComponent } from './gaming-section.component';

describe('GamingSectionComponent', () => {
  let component: GamingSectionComponent;
  let fixture: ComponentFixture<GamingSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GamingSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GamingSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
