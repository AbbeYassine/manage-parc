import {Component, OnInit} from '@angular/core';
import {Voiture} from '../../shared/models/voiture';
import {VoitureService} from '../../shared/services/voiture.service';
import set = Reflect.set;
import {ActivatedRoute, Router} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-voiture',
  templateUrl: './add-voiture.component.html',
  styleUrls: ['./add-voiture.component.css']
})
export class AddVoitureComponent implements OnInit {

  voiture: Voiture;

  isEdit: boolean;
  voitureId: number;

  constructor(private voitureService: VoitureService,
              private route: ActivatedRoute,
              private router: Router) {
    this.voiture = new Voiture();

    this.voitureId = parseInt(this.route.snapshot.paramMap.get('voitureId'), 0);
  }

  ngOnInit() {

    if (this.voitureId) {
      this.voitureService.getById(this.voitureId)
        .subscribe(
          (data: Voiture) => {
            this.voiture = data;
          },
          (error) => {

          }
        );
    }
  }

  valider() {
    console.log(this.voiture);
    if (this.voitureId) {
      this.voitureService.edit(this.voiture)
        .subscribe(
          (data) => {
            Swal.fire({
              title: 'Succées!',
              text: 'Modification Voiture avec succées',
              type: 'success',
              confirmButtonText: 'Cool'
            });

            this.router.navigate(['/manage-voiture/list']);
          }
        );
    } else {
      this.voitureService.add(this.voiture)
        .subscribe(
          (data) => {
            console.log(data);
            Swal.fire({
              title: 'Succées!',
              text: 'Ajout Voiture avec succées',
              type: 'success',
              confirmButtonText: 'Cool'
            });
            this.router.navigate(['/manage-voiture/list']);
          },
          (error) => {

          }
        );
    }
    console.log('Hello');
    // TODO Appel WS
  }

}
