import {Component, OnInit} from '@angular/core';
import {Mission} from '../../shared/models/mission';
import {MissionService} from '../../shared/services/mission.service';
import {Employe} from '../../shared/models/employe';
import {Voiture} from '../../shared/models/voiture';
import {EmployeService} from '../../shared/services/employe.service';
import {VoitureService} from '../../shared/services/voiture.service';

@Component({
  selector: 'app-add-mission',
  templateUrl: './add-mission.component.html',
  styleUrls: ['./add-mission.component.css']
})
export class AddMissionComponent implements OnInit {

  mission: Mission;

  missionId: number;

  employes: Employe[] = [];
  voitures: Voiture[] = [];

  constructor(private missionService: MissionService,
              private employeService: EmployeService,
              private voitureService: VoitureService) {
    this.mission = new Mission();
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
    this.voitureService.getAll()
      .subscribe(
        (data: Voiture[]) => {
          this.voitures = data;
        }
      );
  }

  valider() {
    console.log(this.mission);
  }
}
