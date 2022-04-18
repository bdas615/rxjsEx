import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServService {

  constructor(private http:HttpClient) { }

  url = 'https://swapi.dev/api/people/';

  transferringData(){
    return this.http.get(this.url);
  }
}
