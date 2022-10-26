import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CharizardComponent } from '../../../../src/app/basic/charizard/charizard.component';
import { PokemonService } from '../../../../src/app/basic/services/pokemon.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


describe('CharizardComponent', () => {
  let component: CharizardComponent;
  let fixture: ComponentFixture<CharizardComponent>;
  let compiled: HTMLElement;
  let service:PokemonService;
  let httpMock: HttpTestingController; 
  let img: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharizardComponent ], 
      imports: [HttpClientTestingModule],
      providers: [PokemonService],
    })
    .compileComponents();
  });
  
  beforeEach(() => {
  fixture = TestBed.createComponent(CharizardComponent);
  component = fixture.componentInstance;
  service = TestBed.inject(PokemonService);
  httpMock = TestBed.inject(HttpTestingController);
  
  fixture.detectChanges();
  compiled = fixture.nativeElement;

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  test('debe de hacer match con el snapshot', () => {

    expect(compiled.innerHTML).toMatchSnapshot();

  })


  test('Debe de mostrar un loading al inicio', () => {
    const h2 = compiled.querySelector('h2');
    expect(h2?.textContent).toContain('Loading...'); 
  })

  test('Debe de cargar a Charizard inmediatamente',() => {

    const dummyPokemon = {
        name: 'charizardo',
        sprites:{
          frontDefault: 'https://charizard.com/sprite.png' 
        }
    };

    const request = httpMock.expectOne('https://pokeapi.co/api/v2/pokemon/6');
    expect(request.request.method).toBe('GET'); 
    request.flush(dummyPokemon);
    fixture.detectChanges();
    const h3 = compiled.querySelector('img');
  })


});
