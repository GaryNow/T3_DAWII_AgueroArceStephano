import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Welcome } from '../interfaces/episode';
import { Foto } from '../interfaces/photos';

@Injectable({
  providedIn: 'root'
})
export class RickandmortyService {

  constructor(private http: HttpClient) { }

  getEpisodiosIdImpar(): Observable<Welcome>{
    return this.http.get<Welcome>('https://rickandmortyapi.com/api/episode');
  }

  getPhotos(): Observable<Foto[]> {
    return this.http.get<Foto[]>('https://jsonplaceholder.typicode.com/photos');
  }

}
