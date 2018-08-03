import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAGoalComponent } from './create-a-goal.component';

describe('CreateAGoalComponent', () => {
  let component: CreateAGoalComponent;
  let fixture: ComponentFixture<CreateAGoalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAGoalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAGoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
