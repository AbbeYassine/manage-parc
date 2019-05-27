import {Component, OnInit} from '@angular/core';
import {MissionDTO} from '../../shared/models/mission';
import {MissionService} from '../../shared/services/mission.service';
import {Employe} from '../../shared/models/employe';
import {Voiture} from '../../shared/models/voiture';
import {EmployeService} from '../../shared/services/employe.service';
import {VoitureService} from '../../shared/services/voiture.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-mission',
  templateUrl: './add-mission.component.html',
  styleUrls: ['./add-mission.component.css']
})
export class AddMissionComponent implements OnInit {

  mission: MissionDTO;

  missionId: number;

  employes: Employe[] = [];
  voitures: Voiture[] = [];

  constructor(private missionService: MissionService,
              private employeService: EmployeService,
              private voitureService: VoitureService) {
    this.mission = new MissionDTO();
  }

  ngOnInit() {

    this.getAllEmployes();
    this.getAllVoitrues();


  }

  private getAllEmployes() {
    this.employeService.getAll()
      .subscribe(
        (data: Employe[]) => {
          this.employes = data;
        }
      );
  }

  private getAllVoitrues() {
    this.voitureService.getAllDisponible()
      .subscribe(
        (data: Voiture[]) => {
          this.voitures = data;
        }
      );
  }

  valider() {

    this.missionService.add(this.mission)
      .subscribe(
        (data) => {
          Swal.fire({
            title: 'Succées!',
            text: 'Ajout Mission avec succées',
            type: 'success',
            confirmButtonText: 'Cool'
          });
        },
        (error) => {

        }
      );

    console.log(this.mission);
  }
}
