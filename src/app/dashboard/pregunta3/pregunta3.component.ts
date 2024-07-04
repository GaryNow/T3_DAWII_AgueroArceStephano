import { Component } from '@angular/core';
import { Foto } from '../interfaces/photos';
import { RickandmortyService } from '../services/rickandmorty.service';

@Component({
  selector: 'app-pregunta3',
  standalone: true,
  imports: [],
  templateUrl: './pregunta3.component.html',
  styleUrl: './pregunta3.component.css'
})
export class Pregunta3Component {

  listaFotos: Foto[] = [];
  listaFotosConFiltro: Foto[] = [];


  constructor(private rickiService: RickandmortyService) {

    this.rickiService.getPhotos().subscribe(data => {
      this.listaFotos = data;

      // filtrar las fotos que inicien con las letras "a", "r" o "s" en el titulo
      this.listaFotosConFiltro = this.listaFotos.
        filter(foto => foto.title!.charAt(0).toLowerCase() === 'a'
          || foto.title!.charAt(0).toLowerCase() === 'r'
          || foto.title!.charAt(0).toLowerCase() === 's');

    })

  }

}
