import { Component, OnInit } from '@angular/core';
import { Pet } from '../pet';
import { PetDataService } from '../pet-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pet-add',
  templateUrl: './pet-add.component.html',
  styleUrls: ['./pet-add.component.css']
})
export class PetAddComponent implements OnInit {

  newPet: Pet = new Pet();

  addPet() {
    this.petDataService.addPet(this.newPet).subscribe(
      p =>
      this.router.navigate(["list"])
      //the function above it tells angular to manually navigate to the list route.
    );
  }

  constructor(private petDataService: PetDataService, private router: Router) { }

  ngOnInit(): void {
  }

}
