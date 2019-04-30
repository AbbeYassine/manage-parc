import {Component, OnInit} from '@angular/core';
import {Voiture} from '../../shared/models/voiture';

declare var jQuery: any;

@Component({
  selector: 'app-list-voiture',
  templateUrl: './list-voiture.component.html',
  styleUrls: ['./list-voiture.component.css']
})
export class ListVoitureComponent implements OnInit {


  voitures: Voiture[] = [];

  constructor() {
  }

  ngOnInit() {


    this.voitures.push({
      immatriculation: 'zrfrf',
      dateMiseCirculation: '12/12/2019',
      carburant: 'Essence',
      puissance: '12W',
      modele: 'A',
      marque: 'Fiat',
      id: 1
    });

    setTimeout(function () {
      jQuery('#dataTable').DataTable();
    }, 10);

  }

}
