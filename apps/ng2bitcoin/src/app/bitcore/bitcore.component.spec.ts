import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BitcoreComponent } from './bitcore.component';

describe('BitcoreComponent', () => {
  let component: BitcoreComponent;
  let fixture: ComponentFixture<BitcoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BitcoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BitcoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
