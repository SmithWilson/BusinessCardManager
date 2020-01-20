import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {AddingCardComponent} from './adding-card.component';


describe('AddingCardComponent', () => 
{
  let component: AddingCardComponent;
  let fixture: ComponentFixture<AddingCardComponent>;

  beforeEach(async(() => 
  {
    TestBed.configureTestingModule({
      declarations: [AddingCardComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => 
  {
    fixture = TestBed.createComponent(AddingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => 
  {
    expect(component).toBeTruthy();
  });
});
