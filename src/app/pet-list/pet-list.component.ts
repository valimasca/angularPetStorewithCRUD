import { Component, OnInit } from '@angular/core';
import { PetDataService } from '../pet-data.service';
import { Pet } from '../pet';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css']
})
export class PetListComponent implements OnInit {

  pets: Pet[];

  getPets() : void {
    this.petDataService.getPets().subscribe(
      p => (this.pets = p)
    )
  }

  deletePet(id: number) : void {
    this.petDataService.deletePet(id).subscribe( 
      p => this.getPets());
  }

  constructor(private petDataService: PetDataService) { }

  ngOnInit(): void {
    this.getPets();
  }

}
