import {Component, OnInit} from '@angular/core';
import {Maintenance, MaintenanceDTO} from '../../shared/models/maintenance';
import {MaintenanceService} from '../../shared/services/maintenance.service';
import {ActivatedRoute, Router} from '@angular/router';
import Swal from 'sweetalert2';
import {VoitureService} from '../../shared/services/voiture.service';
import {Voiture} from '../../shared/models/voiture';

@Component({
  selector: 'app-add-maintenance',
  templateUrl: './add-maintenance.component.html',
  styleUrls: ['./add-maintenance.component.css']
})
export class AddMaintenanceComponent implements OnInit {


  maintenance: MaintenanceDTO;
  voitures: Voiture[] = [];

  isEdit: boolean;
  maintenanceId: number;

  constructor(private maintenanceService: MaintenanceService,
              private voitureService: VoitureService,
              private route: ActivatedRoute,
              private router: Router) {
    this.maintenance = new MaintenanceDTO();

    this.maintenanceId = parseInt(this.route.snapshot.paramMap.get('maintenanceId'), 0);
  }

  ngOnInit() {
    if (this.maintenanceId) {
      this.maintenanceService.getById(this.maintenanceId)
        .subscribe(
          (data: Maintenance) => {
            // this.maintenance = data;
          },
          (error) => {

          }
        );
    }

    this.getAllVoitures();
  }

  valider() {
    console.log(this.maintenance);
    if (this.maintenanceId) {
      this.maintenanceService.edit(this.maintenance)
        .subscribe(
          (data) => {
            Swal.fire({
              title: 'Succées!',
              text: 'Modification maintenance avec succées',
              type: 'success',
              confirmButtonText: 'Cool'
            });

            this.router.navigate(['/manage-maintenance/list']);
          }
        );
    } else {
      this.maintenanceService.add(this.maintenance)
        .subscribe(
          (data) => {
            console.log(data);
            Swal.fire({
              title: 'Succées!',
              text: 'Ajout Maintenance avec succées',
              type: 'success',
              confirmButtonText: 'Cool'
            });
            this.router.navigate(['/manage-maintenance/list']);
          },
          (error) => {
          }
        );
    }
    console.log('Hello');
    // TODO Appel WS
  }

  private getAllVoitures() {
    this.voitureService.getAll()
      .subscribe(
        (data: Voiture[]) => {
          this.voitures = data;
        }
      );
  }
}

