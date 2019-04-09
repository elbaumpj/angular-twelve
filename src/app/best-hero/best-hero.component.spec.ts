import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BestHeroComponent } from './best-hero.component';

describe('BestHeroComponent', () => {
  let component: BestHeroComponent;
  let fixture: ComponentFixture<BestHeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BestHeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
