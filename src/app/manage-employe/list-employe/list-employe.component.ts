import {Component, OnInit} from '@angular/core';
import {Employe} from '../../shared/models/employe';
import {EmployeService} from '../../shared/services/employe.service';
import Swal from 'sweetalert2';

declare var jQuery: any;

@Component({
  selector: 'app-list-employe',
  templateUrl: './list-employe.component.html',
  styleUrls: ['./list-employe.component.css']
})
export class ListEmployeComponent implements OnInit {


  employes: Employe[] = [];

  constructor(private employeService: EmployeService) {
  }

  ngOnInit() {


    this.employeService.getAll()
      .subscribe(
        (data: Employe[]) => {
          this.employes = data;
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
        this.employeService.deleteById(this.employes[index].id)
          .subscribe(
            (data) => {
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              );
              this.employes.splice(index, 1);
            },
            (error) => {

            }
          );
      }
    });


  }

}
