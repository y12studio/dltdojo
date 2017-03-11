import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GqlComponent } from './gql.component';

describe('GqlComponent', () => {
  let component: GqlComponent;
  let fixture: ComponentFixture<GqlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GqlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GqlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
