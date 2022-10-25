import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CounterComponent } from '../../../src/app/basic/counter/counter.component';


describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(()=>{
    fixture = TestBed.createComponent(CounterComponent)
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  test('Debe hacer match con el snapshot',() => {

    expect(compiled).toMatchInlineSnapshot(`
<div
  id="root3"
>
  <h1>
    Counter 10
  </h1>
  <hr />
  <button
    class="btn btn-primary mx-1"
  >
    +1
  </button>
  <button
    class="btn btn-primary mx-1"
  >
    -1
  </button>
</div>
`);

  })

  test('increaseBy debe de incrementar basado en el comportamiento', () => {
    component.increaseBy(5);
    expect(component.counter).toBe(15)
  })

  test('hacer click en los botones deben incrementar y disminuir en 1',() => {
    const buttons = compiled.querySelectorAll('button');
    buttons[0].click();
    buttons[0].click();
    expect(component.counter).toBe(12);
    buttons[1].click();
    buttons[1].click();
    expect(component.counter).toBe(10);
  })


  test('Cambiar el counter debe actualizar la etiqueta', () => {

    component.increaseBy(10);
    fixture.detectChanges();

    const h1 = compiled.querySelector('h1');
    expect(h1?.textContent).toContain('20');

  })










});
