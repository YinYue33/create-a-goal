import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateATaskComponent } from './create-a-task.component';

describe('CreateATaskComponent', () => {
  let component: CreateATaskComponent;
  let fixture: ComponentFixture<CreateATaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateATaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateATaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
