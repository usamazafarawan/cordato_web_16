import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterPersonalComponent } from './register-personal.component';

describe('RegisterPersonalComponent', () => {
  let component: RegisterPersonalComponent;
  let fixture: ComponentFixture<RegisterPersonalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterPersonalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
