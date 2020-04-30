import { Component, OnInit } from '@angular/core';
import { PetDataService } from '../pet-data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Pet } from '../pet';

@Component({
  selector: 'app-pet-edit',
  templateUrl: './pet-edit.component.html',
  styleUrls: ['./pet-edit.component.css']
})
export class PetEditComponent implements OnInit {

  editPet: Pet = new Pet();

  savePet() {
    this.petDataService.editPet(this.editPet).subscribe(
      p => this.router.navigate(["list"]));
  }

  constructor(private petDataService: PetDataService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      this.petDataService.getPet(+param["id"]).subscribe(
        p=> (this.editPet = p));
    });
  }

}
