import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivComponentComponent } from './liv-component.component';

describe('LivComponentComponent', () => {
  let component: LivComponentComponent;
  let fixture: ComponentFixture<LivComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LivComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LivComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
