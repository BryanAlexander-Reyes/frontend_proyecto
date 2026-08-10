import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidoDinamicoComponet } from './contenido-dinamico';

describe('ContenidoDinamicoComponet', () => {
  let component: ContenidoDinamicoComponet;
  let fixture: ComponentFixture<ContenidoDinamicoComponet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContenidoDinamicoComponet],
    }).compileComponents();

    fixture = TestBed.createComponent(ContenidoDinamicoComponet);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
