import {Component, OnInit} from '@angular/core';
import {Mission} from '../../shared/models/mission';
import {MissionService} from '../../shared/services/mission.service';
import Swal from 'sweetalert2';

declare var jQuery: any;

@Component({
  selector: 'app-list-mission',
  templateUrl: './list-mission.component.html',
  styleUrls: ['./list-mission.component.css']
})
export class ListMissionComponent implements OnInit {


  missions: Mission[] = [];

  constructor(private missionService: MissionService) {
  }

  ngOnInit() {


    this.missionService.getAll()
      .subscribe(
        (data: Mission[]) => {
          this.missions = data;
        },
        (error) => {
        }
      );

    setTimeout(function () {
      jQuery('#dataTable').DataTable();
    }, 10);

  }

  delete(index: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        this.missionService.deleteById(this.missions[index].id)
          .subscribe(
            (data) => {
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              );
              this.missions.splice(index, 1);
            },
            (error) => {

            }
          );
      }
    });


  }

}

