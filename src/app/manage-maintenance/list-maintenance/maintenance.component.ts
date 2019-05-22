import {Component, OnInit} from '@angular/core';
import {Maintenance} from '../../shared/models/maintenance';
import {MaintenanceService} from '../../shared/services/maintenance.service';
import Swal from 'sweetalert2';

declare var jQuery: any;

@Component({
  selector: 'app-list-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.css']
})
export class ListMaintenanceComponent implements OnInit {


  maintenances: Maintenance[] = [];

  constructor(private maintenanceService: MaintenanceService) {
  }

  ngOnInit() {


    this.maintenanceService.getAll()
      .subscribe(
        (data: Maintenance[]) => {
          this.maintenances = data;
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
        this.maintenanceService.deleteById(this.maintenances[index].id)
          .subscribe(
            (data) => {
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              );
              this.maintenances.splice(index, 1);
            },
            (error) => {

            }
          );
      }
    });


  }

}
