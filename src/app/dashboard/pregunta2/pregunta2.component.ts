import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Result } from '../interfaces/episode';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { RickandmortyService } from '../services/rickandmorty.service';
import { MaterialModule } from '../../shared/material/material.module';

@Component({
  selector: 'app-pregunta2',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './pregunta2.component.html',
  styleUrl: './pregunta2.component.css'
})
export class Pregunta2Component implements AfterViewInit {

  displayedColumns: string[] = ['id', 'name', 'date', 'episode', 'characters', 'url', 'created'];
  dataSource!: MatTableDataSource<Result>;

  listaEpisodios: Result[] = [];
  listaEpisodiosImpares: Result[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private rickiService: RickandmortyService) {
    this.rickiService.getEpisodiosIdImpar().subscribe(data => {
      this.listaEpisodios = data.results;

      // Lista de episodios con el "id" impar
      this.listaEpisodiosImpares = this.listaEpisodios.filter(episode => episode.id % 2 !== 0);

      console.log(this.listaEpisodios);
      console.log(this.listaEpisodiosImpares);
      this.dataSource = new MatTableDataSource(this.listaEpisodiosImpares);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })

  }

  ngAfterViewInit() {


  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  truncateCharacters(characters: string): string {
    const maxLength = 50; // ajusta el número máximo de caracteres a mostrar
    if (characters.length > maxLength) {
      return characters.substring(0, maxLength) + '...';
    }
    return characters;
  }


}
