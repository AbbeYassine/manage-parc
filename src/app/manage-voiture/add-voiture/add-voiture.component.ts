import {Component, OnInit} from '@angular/core';
import {Voiture} from '../../shared/models/voiture';

@Component({
  selector: 'app-add-voiture',
  templateUrl: './add-voiture.component.html',
  styleUrls: ['./add-voiture.component.css']
})
export class AddVoitureComponent implements OnInit {

  voiture: Voiture;

  constructor() {
    this.voiture = new Voiture();
  }

  ngOnInit() {
  }

  valider() {
    console.log(this.voiture);
    // TODO Appel WS
  }

}
