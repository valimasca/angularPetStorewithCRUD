import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pet } from './pet';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PetDataService {

  url: string = "http://localhost:3000/pets";

  getPets(): Observable<Pet[]>{
    return this.http.get<Pet[]>(this.url);
  }

  getPet(id: number) : Observable<Pet>{
    return this.http.get<Pet>(this.url + "/" + id);
  }

  //Obserivables in Angular
  //Angular makes use of observables as an interface to handle a variety of common asynchronous operations.
  // ... The HTTP module uses observables to handle AJAX requests and responses.
  // The Router and Forms modules use observables to listen for and respond to user-input events.

  addPet(pet: Pet) : Observable<Pet> {
    return this.http.post<Pet>(this.url, pet);
  }

  deletePet(id:number) : Observable<Pet>{
    return this.http.delete<Pet>(this.url + "/" + id);
  }

  editPet(pet: Pet) : Observable<Pet> {
    return this.http.put<Pet>(this.url + "/" + pet.id, pet);
  }


  constructor(private http: HttpClient) { }
}
